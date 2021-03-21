const express = require("express");
const router = express.Router();
const database = require("../database");

router.get("", (req, res) => {
  database
    .any("SELECT * FROM tasks;")
    .then((tasks) => {
      res.render("pages/home", {
        title: "Home Page",
        tasks: tasks,
      });
    })
    .catch((err) => {
      console.log(err);
    });

  /*database
    .any("SELECT * FROM tasks;")
    .then((tasks) => {
      res.render("pages/home");
    })
    .catch((err) => {
      console.log(err);
    });*/
  /*database
    .any("SELECT * FROM tasks;")
    .then((tasks) => {
      res.render("pages/home", {
        title: "Home Page",
        //tasks: tasks,
      });
    })
    .catch((err) => {
      console.log(err);
    });*/
});

module.exports = router;
