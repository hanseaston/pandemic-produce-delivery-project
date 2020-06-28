/**
 * Main entry of the shop node application
 * Handles the main logic of the files
 */

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Setting HTML template engines to be of ejs
app.set("view engine", "ejs");
app.set("views", "views");

// 404 Page controller
const page404Controller = require("./controllers/page404Controller");

// Admin and shop routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(page404Controller.get404Page);

app.listen(3000);
