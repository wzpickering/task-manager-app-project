const { response } = require("express");
const express = require("express");
const router = express.Router();
const Project = require("../models/projectModel");

router.route("/").post((req, res) => {
  const {title, content} = req.body;
  console.log(req.body);
  console.log(title, content);
  const newProject = new Project({
    title,
    content,
  });
  newProject.save();
  res.status(201).json({
    newProject
  })
}).get((req,res)=>{
  Project.find()
    .then(foundProjects=> {
        res.json(foundProjects)
    })
});

module.exports = router;
