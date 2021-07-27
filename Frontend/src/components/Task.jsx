import React, { useState, useEffect } from "react";
import { TaskContext } from "./Context";
import axios from "axios"

function Task(url) {
  const { setTask, task, handleDelete } = React.useContext(TaskContext);
  console.log("PROCESS ENV", process.env)

  useEffect(() => {
    fetch(`${process.env.SERVER_DOMAIN}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setTask(jsonRes))
      .catch(err => console.log(err));
  }, []); //task,setTask


  return (
    <ul>
      {task.map((task, index) => {
        return (
          <div className="task" key={index}>
            <button className="task-button" onClick={() => handleDelete(task._id)}></button>
              <h3>{task.title}</h3>            
          </div>
        );
      })}
    </ul> 
  );
  
}

            {/* <input type="checkbox" onClick={() => handleDelete(task._id)}  /> */}

export default Task;

