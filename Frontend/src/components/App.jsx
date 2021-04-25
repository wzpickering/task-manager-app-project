import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import InputTask from "./InputTask";
import Task from "./Task";
import ContextProvider from "./Context";
import Modal from "./Modal";

function App() {
  const [isOpen, toggleOpen] = useState(false);

  const BUTTON_WRAPPER_STYLES = {
    position: "relative",
    zIndex: 1,
  };

  return (
    <ContextProvider>
      <div>
        <Header />
        <div style={BUTTON_WRAPPER_STYLES} onClick={()=>console.log("clicked")}> 
        {/* dispite Modal being rendered seperately, it can pass function up to parent */}
          <button onClick={() => toggleOpen(true)}>Add Project</button>
          <Modal open={isOpen} onClose={() => toggleOpen(false)}></Modal>
        </div>

        <div className="task-form">
          <div>
            <h1>Daily Tasks</h1>
          </div>
          <InputTask />
          <div>
            <Task />
          </div>
        </div>
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;

// <ul>
//     {tasks.map((task, index) => {
//       return <Task key={index} id={index} text={task} onDelete={deleteTask}/>; //
//     })}
//   </ul>

// onAdd={addTask}
