import React, { useState } from "react";
import axios from "axios"; 
import {TaskContext} from "./Context"

function InputTask(props) {
const {setTask, task} = React.useContext(TaskContext);
const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleClick(e){
    e.preventDefault();
    // props.onAdd(input);
    const newTask = {
      title: input
  }
  axios.post("http://localhost:3001", newTask); 
  setTask([newTask, ...task]);//cs log
  setInput("");
  }

  return (
    <div className="input-group mb-3">
      <input
        className="form-control"
        type="text"
        onChange={handleChange}
        name="title"
        placeholder="New Task"
        value={input}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default InputTask;


// //() => {
//   props.onAdd(input);
//   setInput("");
// }