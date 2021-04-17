import React, {useState, useEffect} from "react";

function Task(props) {

    const [task, setTask] = useState({
        title: ""
    });

 
    
    
    return (
        <li onClick={()=>{props.onDelete(props.id)}}>{task.title}</li> //props.text
    )
}

export default Task;