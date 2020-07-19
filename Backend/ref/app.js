/**
 * Main entry of the shop node application
 * Handles the main logic of the files
 * @class
 */

/** General imports */
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user");
const session = require("express-session");
const MongoDbStore = require("connect-mongodb-session")(session);
const uri = require("./pdstore").uri;

/** Importing routes and controller */
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");
const page404Controller = require("./controllers/page404Controller");

/** Initializing my app and initialize mongo db store */
const app = express();
const store = new MongoDbStore({ uri: uri, collection: "sessions" });

/** Parsing the requests */
app.use(bodyParser.urlencoded({ extended: false }));
/** Static because we want to load all of the styling files */
app.use(express.static(path.join(__dirname, "public")));
/** Session store */
app.use(
  session({
    secret: "HANS'S SECRET",
    resave: false,
    saveUninitializaed: false,
    store: store,
  })
);

/** Setting HTML template engines to be of ejs */
app.set("view engine", "ejs");
app.set("views", "views");

/** First middleware that will always be executed
 Using findName here since there is only one user */
app.use((req, res, next) => {
  User.findOne()
    .then((user) => {
      req.user = user;
      /** Needs next to handle other requests */
      next();
    })
    .catch((err) => console.err(err));
});

/** Admin,shop,and auth routes */
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

/** 404 Page controller */
app.use(page404Controller.get404Page);

/** Connecting to mongoose */
mongoose
  .connect(uri)
  .then(() => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Hans",
          email: "hans00@uw.edu",
          cart: { items: [] },
        });
        user.save();
      }
    });
    app.listen(8000);
  })
  .catch((err) => console.log(err));
