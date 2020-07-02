/**
 * Main entry of the shop node application
 * Handles the main logic of the files
 */

// General imports
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user");

// Importing routes and controller
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const page404Controller = require("./controllers/page404Controller");
const { unwatchFile } = require("fs");

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
  User.findById("5efe5dee0bd72511ec85b95f")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

// Admin and shop routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// 404 Page controller
app.use(page404Controller.get404Page);

// Connecting to mongoose
mongoose
  .connect(
    "mongodb+srv://Hans:shop@shop.ozkkk.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then(() => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Hans",
          email: "hans00@uw.edu",
          cadt: { items: [] },
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch((err) => console.log(err));
