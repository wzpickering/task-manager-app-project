import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import InputTask from "./InputTask";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    fetch("/").then(res=>{
      if (res.ok) {
        return res.json()
      }
    }).then(jsonRes => setTasks(jsonRes));
  })

 
  function addTask(inputTask) {
    setTasks((prevTasks) => [...prevTasks, inputTask]);
  }

  function deleteTask(id){
      setTasks((prevTasks)=>{
          return prevTasks.filter((task, index) => {
              return id !== index;
          })
      })
  }

  return (
    <div>
      <Header />
      <div className="task-form">
        <div>
          <h1>Daily Tasks</h1>
        </div>
        <InputTask onAdd={addTask} />
        <div>
          <ul>
            {tasks.map((task, index) => {
              return <Task key={index} id={index} text={task} onDelete={deleteTask}/>; //
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
