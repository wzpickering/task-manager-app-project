import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import InputTask from "./InputTask";
import Task from "./Task";
import ContextProvider from "./Context";
import Modal from "./Modal";
import Project from "./Project";

function App() {
  const [isOpen, toggleOpen] = useState(false);

  const GRID = {
    display: "grid",
  };

  const BUTTON_WRAPPER_STYLES = {
    position: "relative",
    zIndex: 1,
  };

  return (
    <ContextProvider>
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div
                style={BUTTON_WRAPPER_STYLES}
                onClick={() => console.log("clicked")}
              >
                {/* dispite Modal being rendered seperately, it can pass function up to parent */}
                <button className="projectButton" onClick={() => toggleOpen(true)}>Add Project</button>
                <Modal open={isOpen} onClose={toggleOpen}></Modal>
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
            </div>
            <div className="col-md-6">
              <Project />
            </div>
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
