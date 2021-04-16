const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(epress.json());

//mongoose stuff
mongoose.connect(
  "mongodb+srv://wzpickering:Jp101262???@cluster0.zktjk.mongodb.net/taskmanagerDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

app.use("/", require("./routes/taskRoute"));

app.listen(3001, () => {
  console.log("successfully connected to port 3001");
});
