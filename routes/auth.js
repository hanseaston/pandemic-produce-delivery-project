/**
 * This class handles all of the auth-related requests
 * @class
 */

/** Imports */
const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

/** Routes */
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.post("/logout", authController.postLogout);

/** Exports */
module.exports = router;
