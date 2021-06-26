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
                console.log(id)
            }
            else{
                console.log("deleted");
            }
          }) 
          axios.delete("http://localhost:3001/delete", {data:{id}})
            .then((res) => {
                console.log('SUCCESS', newArray)
                setTask(newArray)
            })
            .catch((err) => {
                console.error("Couldn't delete object")
            })
          setTask(newArray);
      }
      
      const deleteProject=(id)=>{
          const newArray= [];
            project.forEach((ele)=>{
                if (ele._id !==id){
                    newArray.push(ele);
                    console.log(ele, id)
                }
                else{
                    console.log( "deleted");
                }
            })
            axios.delete("http://localhost:3001/project/delete", {data:{id}})
            setProject(newArray);
            // console.log(Object.keys(project), "project object")
      }

    return (
        <TaskContext.Provider value={{task, setTask, handleDelete, project, setProject, deleteProject}}>
        {props.children}
        </TaskContext.Provider>
    )
}
export default ContextProvider;
