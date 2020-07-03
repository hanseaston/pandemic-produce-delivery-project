const express = require("express");

const authController = require("../controllers/authController");

const router = express.Router();

router.get("/login", authController.getLogin);

router.post("/login", authController.postLogin);

module.exports = router;
