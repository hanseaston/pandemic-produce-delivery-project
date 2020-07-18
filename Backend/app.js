/**
 * @class
 * Library imports
 */
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");

/**
 * Router imports
 */
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

/**
 * Configs files for private information
 */
const config = require("dotenv").config();
if (config.error) throw error;

// Initialize the app
const app = express();

/**
 * Using libarary imports on the app
 */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/**
 * Production dependency for frontend connection
 */
app.use(express.static(path.join(__dirname, "public")));
if (process.env.NODE_ENV === "production") {
  app.use(express.static(paths.join(__dirname, "..", "Frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(paths.join(__dirname, "..", "Frontend/build", "index.html"));
  });
}

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
