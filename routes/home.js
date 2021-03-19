const express = require("express");
const router = express.Router();
const database = require("../database");

router.get("", (req, res) => {
  console.log("I'm in homepage");
  res.render("pages/home", {});
});

module.exports = router;
