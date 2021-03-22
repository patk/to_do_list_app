const express = require("express");
const router = express.Router();
const database = require("../database");

router.get("/", (req, res) => {
  database
    .any(
      `SELECT tasks.task_id, tasks.task_description, lists.list_name, tasks.task_date, tasks.is_complete FROM tasks LEFT JOIN lists ON tasks.list_id = lists.list_id;`
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
});

router.post("/", (req, res) => {
  let task_description = req.body.task;
  let list_id = req.body.list;
  let task_date = req.body.date;

  if (task_date === "") {
    const formattedDate = (date) => date.toISOString().slice(0, 10);
    task_date = formattedDate(new Date());
  }

  database
    .none(
      `INSERT INTO tasks (task_description, list_id, task_date) VALUES ($1, $2, $3);`,
      [task_description, list_id, task_date]
    )
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
