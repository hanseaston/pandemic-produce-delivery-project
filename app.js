/**
 * Main entry of the shop node application
 * Handles the main logic of the files
 */

// General imports
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoDb = require("./util/db");
const User = require("./models/user");

// Importing routes and controller
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const page404Controller = require("./controllers/page404Controller");

// Initializing my app
const app = express();

// Parsing the requests
app.use(bodyParser.urlencoded({ extended: false }));
// Static because we want to load all of the styling files
app.use(express.static(path.join(__dirname, "public")));

// Setting HTML template engines to be of ejs
app.set("view engine", "ejs");
app.set("views", "views");

// First middleware that will always be executed
app.use((req, res, next) => {
  User.findUserById("5efd224fb9c9f315cca111a7")
    .then((user) => {
      req.user = new User(user.name, user.email, user.cart, user._id);
      next();
    })
    .catch((err) => console.log(err));
});

// Admin and shop routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// 404 Page controller
app.use(page404Controller.get404Page);

// Connecting to mongoDb
mongoDb.mongoConnect(() => {
  // Listening on port 3000 as default
  console.log("server connected");
  app.listen(3000);
});
