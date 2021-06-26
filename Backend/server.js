const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());

//mongoose stuff
mongoose.connect(
  "mongodb+srv://wzpickering:Jp101262%3F%3F%3F@cluster0.zktjk.mongodb.net/taskmanagerDB?retryWrites=true&w=majority"
  ,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

app.use("/", require("./routes/taskRoute"));
app.use("/project", require("./routes/projectRoute")); //we'll see if we need this

if(process.env.Node_ENV ==='production'){
  app.use(express.static('Frontend/build'))
  app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Frontend', 'build', 'index.html'))
  })
}

app.listen(3001, () => {
  console.log("successfully connected to port 3001");
});
