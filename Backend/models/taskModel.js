const mongoose = require("mongoose");

const taskSchema = {
    title: String
}

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;