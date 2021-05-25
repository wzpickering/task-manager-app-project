const { response } = require("express");
const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");

router.route("/").post((req, res) => {
  const title = req.body.title;
  const newTask = new Task({
    title,
  });
  newTask.save();
});
router.route("/").get((req, res) => {
  Task.find().then((foundTasks) => {
    res.json(foundTasks);
  });
});
router.route("/delete").delete((req, res) => {
  console.log(req.body.id, "here");
  Task.deleteOne({ _id: req.body.id }).then((response) => {
    console.log(response);
  });
});

module.exports = router;
