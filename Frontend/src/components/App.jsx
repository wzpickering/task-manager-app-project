import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import InputTask from "./InputTask";
import Task from "./Task";
import ContextProvider, { TaskContext } from "./Context";
import Modal from "./Modal";
import Project from "./Project";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function App() {
  const { setProject, project } = React.useContext(TaskContext);
  const [isOpen, toggleOpen] = useState(false);
  const [hasProjects, setHasProjects]= useState({display: "none",})


  useEffect(() => {
    fetch("http://localhost:3001/project")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setProject(jsonRes))
      .catch(err => console.log(err))
  }, [project]);

  const displayStyle = {
    display: "none",
  };

  const BUTTON_WRAPPER_STYLES = {
    position: "relative",
    zIndex: 1,
  };

  return (
    <ContextProvider>
      <div id="wrapper">
        <Header />
        <div
          className="project-button-div"
          style={{ display: project.length > 0 && "none" }}
        >
          <Fab
            variant="extended"
            color="primary"
            className="project-button"
            onClick={() => toggleOpen(true)}
          >
            Add Project
          </Fab>
        </div>
        <div className="container main-content">
          <div className={project.length !== 0?"row": null}>
            <div className={project.length !== 0 ?"col-md-6": null}>
              <div
                style={BUTTON_WRAPPER_STYLES}
                onClick={() => console.log("clicked")}
              >
                {/* dispite Modal being rendered seperately, it can pass function up to parent */}

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
            <div className="col-md-6 project-list">
              <Project />
              <div className="project-button-div" style={{display: project.length === 0 && "none"}}>
                <Fab
                  size="small"
                  color="primary"
                  className="project-button"
                  onClick={() => toggleOpen(true)}
                >
                  <AddIcon />
                </Fab>
              </div>
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
