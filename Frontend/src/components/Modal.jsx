import React, { useState } from "react";
import ReactDom from "react-dom";
import axios from "axios";
import TaskContext from "./Context";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};

export default function Modal({ open, children, onClose }) {
    const {project, setProject} = React.createContext(TaskContext);
  const [projectInput, setProjectInput] = useState({
    title: "",
    content: ""
  });

  function handleSubmit(e){
      e.preventDefault();
      const newProject = {
          title: projectInput.title,
          content: projectInput.content
      }
      axios.post("http://localhost:3001", newProject);
      setProject(newProject, ...project);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setProjectInput(prevVal => {
      return {
        ...prevVal, 
        [name]: value
      };
    });
  }

  if (!open) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <form onSubmit={handleSubmit}>
          <input
            name="projectTitle"gh
            onChange={handleChange}
            value={projectInput.title}
            placeholder="Title"
          />
          <textarea
            name="projectContent"
            onChange={handleChange}
            value={projectInput.content}
            placeHolder="Content"
          />
          <button className="btn btn-primary" onClick={onClose}>
            Add
          </button>
          <button>Cancel</button>
          {children}
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}

