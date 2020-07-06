/**
 * Simple controller for setting up the 404 page
 * @module
 */

exports.get404Page = (req, res, next) => {
  res.status(404).render("404", {
    pageTitle: "Page Not Found",
    path: "error",
    isAuthenticated: req.session.isLoggedIn,
  });
};
