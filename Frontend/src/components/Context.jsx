import axios from "axios";
import React from "react";

export const TaskContext = React.createContext();

const ContextProvider = (props)=>{
    const [task, setTask] = React.useState([ 
        {
        title: "",
      },]);

    const [project, setProject] = React.useState([
        {title: "",
        content: ""
    },])

      const handleDelete = (id)=>{
          const newArray = [];
          task.forEach((ele)=>{
            if (ele._id !== id){
                newArray.push(ele);
            }
            else{
                console.log("deleted");
            }
          }) 
          axios.delete("http://localhost:3001/delete", {data:{id}})
          setTask(newArray);
      }
    return (
        <TaskContext.Provider value={{task, setTask, handleDelete, project, setProject}}>
        {props.children}
        </TaskContext.Provider>
    )
}
export default ContextProvider;