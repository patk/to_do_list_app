const express = require("express");
const router = express.Router();
const database = require("../database");

// GET - get all tasks
router.get("/", (req, res) => {
  database
    .any(
      "SELECT tasks.task_id, tasks.task_description, lists.list_name, tasks.task_date, tasks.is_complete FROM tasks LEFT JOIN lists ON tasks.list_id = lists.list_id ORDER BY list_name, task_date, task_description;"
    )
    .then((tasks) => {
      database
        .any("SELECT * FROM lists;")
        .then((lists) => {
          res.render("pages/home", {
            title: "Home Page",
            tasks: tasks,
            lists: lists,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

// POST - add new task
router.post("/task", (req, res) => {
  const task_description = req.body.task;
  const list_id = req.body.list;
  const task_date = req.body.date;

  database
    .none(
      "INSERT INTO tasks (task_description, list_id, task_date) VALUES ($1, $2, $3);",
      [task_description, list_id, task_date]
    )
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

// POST - add new list
router.post("/list", (req, res) => {
  const list_name = req.body.list;

  database
    .none("INSERT INTO lists (list_name) VALUES ($1);", [list_name])
    .then(() => {
      //alert("New list has been created");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

// POST - mark completed task
router.post("/markcompleted", (req, res) => {
  database
    .none("UPDATE tasks SET is_complete = 'true' WHERE task_id = $1", [
      req.query.taskid,
    ])
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

// POST - delete task
router.post("/delete", (req, res) => {
  database
    .none("DELETE FROM tasks WHERE task_id = $1", [req.query.taskid])
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
