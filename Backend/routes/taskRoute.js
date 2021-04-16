const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");

router.route("/").post((req, res)=>{
    const title = req.body.title; //could be a problem with title
    const newTask = new Task({
        title: title
    });
    newTask.save();
})

module.exports = router;