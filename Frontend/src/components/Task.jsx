import React from "react";

function Task(props) {

    // const [task, setTask] = useState({
    //     title: ""
    // });

 
    
    
    return (
        <li onClick={()=>{props.onDelete(props.id)}}>{props.text}</li> //props.text
    )
}

export default Task;