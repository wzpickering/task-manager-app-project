const mongoose = require("mongoose");

const ProjectSchema = {
    title: String,
    content: String
}

const Project = mongoose.model("Project", ProjectSchema)

module.exports = Project;