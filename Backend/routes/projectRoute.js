const { response } = require("express");
const express = require("express");
const router = express.Router();
const Project = require("../models/projectModel");

router
  .route("/")
  .post((req, res) => {
    const { title, content } = req.body;
    console.log(req.body);
    console.log(title, content);
    const newProject = new Project({
      title,
      content,
    });
    newProject.save();
    res.status(201).json({
      newProject,
    });
  })
  .get((req, res) => {
    Project.find().then((foundProjects) => {
      res.json(foundProjects);
    });
  });
  router.route("/delete").delete((req, res) => {
    console.log(req.body.id, "here");
    Project.deleteOne({ _id: req.body.id }).then((response) =>
      console.log(response)
    );
  });

module.exports = router;
