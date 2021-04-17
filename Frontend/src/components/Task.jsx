import React, {useState, useEffect} from "react";

function Task(props) {

    const [task, setTask] = useState({
        title: ""
    });

    useEffect(()=>{
        fetch("/").then(res=>{
          if (res.ok) {
            return res.json()
          }
        }).then(jsonRes => setTask(jsonRes));
      })
    
    
    return (
        <li onClick={()=>{props.onDelete(props.id)}}>{task.title}</li> //props.text
    )
}

export default Task;