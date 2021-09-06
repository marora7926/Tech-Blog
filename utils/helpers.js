// get current date (alternate method date "return date.toLocaleDateString();")
module.exports = {
      format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
          new Date(date).getFullYear()
        }`;
    },
};