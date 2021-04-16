import React, {useState} from "react";

function InputTask(props) {
    const [input, setInput] = useState("");

    function handleChange(e){
        setInput(e.target.value);
    }
    return (
        <div className="input-group mb-3">
        <input className="form-control" type="text" onChange={handleChange} placeholder="New Task" value={input}/>
        <div className="input-group-append">
        <button className="btn btn-outline-secondary" onClick={()=>{
            props.onAdd(input);
            setInput("");
        }}>Add Task</button>
        </div>
        </div>
    )
}

export default InputTask;