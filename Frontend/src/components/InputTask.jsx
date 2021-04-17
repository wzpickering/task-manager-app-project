import React, { useState } from "react";
import axios from "axios"; 

function InputTask(props) {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleClick(e){
    // e.preventDefault();
    const newTask = {
      title: input
  }
  axios.post("http://localhost:3001", newTask); 
    props.onAdd(input);
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