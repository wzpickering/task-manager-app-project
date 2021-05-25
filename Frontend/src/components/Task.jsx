import React, { useState, useEffect } from "react";
import { TaskContext } from "./Context";

function Task(props) {
  const { setTask, task, handleDelete } = React.useContext(TaskContext);

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setTask(jsonRes));
  }, [task, setTask]);

  //onClick={()=>{props.onDelete(props.id)}}

  return (
    <ul>
      {task.map((task, index) => {
        return (
          <li key={index}>
            <h3>{task.title}</h3>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        );
      })}
    </ul> //props.text
  );
}

export default Task;
