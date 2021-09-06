const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(blog, {
  foreignKey: 'blog_id',
});

module.exports = { User, Post, Comment };