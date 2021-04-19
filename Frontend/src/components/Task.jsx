import React, { useState, useEffect } from "react";

function Task(props) {
  const [tasks, setTasks] = useState([
    {
      title: "",
    },
  ]);

  useEffect(() => {
    fetch("/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setTasks(jsonRes));
  });


 
  //onClick={()=>{props.onDelete(props.id)}}

  return (
    <ul>
      {tasks.map((task, index) => {
        console.log(task)
        return <li key={index}>{task.title}</li>;
      })}
    </ul> //props.text
  );
}

export default Task;
