const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");

router.route("/").post((req, res)=>{
    const title = req.body.title; 
    const newTask = new Task({
        title
    });
    newTask.save();
}).get((req,res)=>{
    Task.find()
        .then(foundTasks => res.json(foundTasks))
})

module.exports = router;