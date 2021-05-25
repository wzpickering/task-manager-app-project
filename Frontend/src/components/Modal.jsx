import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import axios from "axios";
import {TaskContext} from "./Context";

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
  const { project, setProject } = React.useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e) { //usually everything renders in order, await prevents things behind from rending until axios fetches data
    e.preventDefault();
    const newProject = { //shorthand for creating objects
      title,
      content
    };
    await axios.post("http://localhost:3001/project", JSON.stringify(newProject), {
      headers: {
        "Content-Type": "application/json"
      }
    });//converts object to json
    setProject([newProject, ...project]);
    console.log(project);
    onClose(false);
  }

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setProjectInput((prevVal) => {
  //     return {
  //       ...prevVal,
  //       [name]: value,
  //     };
  //   });
  // }

  if (!open) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <form onSubmit={handleSubmit}>
          <input
            name="projectTitle"
            onChange={(e)=> setTitle(e.target.value)}
            value={title}
            placeholder="Title"
          />
          <textarea
            name="projectContent"
            onChange={(e)=> setContent(e.target.value)}
            value={content}
            placeholder="Content"
          />
          <button type="submit" className="btn btn-primary" >
            Add
          </button>
          <button onClick={()=> onClose(false)}>Cancel</button>
          {children}
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}
