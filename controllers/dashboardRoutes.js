const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.get('/', async (req, res) => {
    try {
        // Get all posts and JOIN with user data
        const postData = await Post.findAll({
            where: {
                userId: req.session.userId
            }
        });
        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));
        // Pass serialized data and session flag into template
        res.render("post", {
            layout: "dashboard",
            posts
        });
    } 
        catch (err) {
        res.status(500).json(err);
        res.redirect("login");
    }
});


router.get("/new", withAuth, (req, res) => {
    res.render("new", { email: req.session.email} );
});

router.get("/edit/:id", withAuth, (req, res) => {
    Post.findByPk(req.params.id)
        .then(postData => {
            if (postData) {
                const post = postData.get({ plain: true });

                res.render("edit", {
                    layout: "dashboard",
                    post
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;