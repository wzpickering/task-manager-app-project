import React from "react";

function Task(props) {

    return (
        <li onClick={()=>{props.onDelete(props.id)}}>{props.text}</li>
    )
}

export default Task;