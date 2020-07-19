var express = require("express");
var router = express.Router();

router.post("/", function (req, res) {
  res.status(201).send();
});

module.exports = router;
