const { response } = require("express");
const express = require("express");
const router = express.Router();
const Project = require("../models/projectModel");

router.route().post((req, res) => {
  const title = req.body.projectTitle;
  const content = req.body.projectContent;
  const newProject = new Project({
    title,
    content,
  });
  newProject.save();
});

module.exports = router;
