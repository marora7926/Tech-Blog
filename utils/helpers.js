// get current date (alternate method date "return date.toLocaleDateString();")
module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
};