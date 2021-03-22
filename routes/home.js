const express = require("express");
const router = express.Router();
const database = require("../database");

router.get("", (req, res) => {
  database
    .any(
      "SELECT tasks.task_id, tasks.task_description, lists.list_name, tasks.date_time, tasks.is_complete FROM tasks LEFT JOIN lists ON tasks.list_id = lists.list_id;"
    )
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
