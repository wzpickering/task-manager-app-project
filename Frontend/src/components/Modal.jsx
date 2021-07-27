import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import axios from "axios";
import { TaskContext } from "./Context";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "solid purple",
  backgroundColor: "#f9ebff",
  padding: "50px",
  zIndex: 1000,
  borderRadius: "20px",
  height: "350px",
  width: "450px"
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

  async function handleSubmit(e) {
    //usually everything renders in order, await prevents things behind from rending until axios fetches data
    e.preventDefault();
    const newProject = {
      //shorthand for creating objects
      title,
      content,
    };
    const createdProject = await axios.post(
      `${process.env.SERVER_DOMAIN}/project`,
      JSON.stringify(newProject),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(res => res.data); //converts object to json
    setProject([...project, createdProject]);
    console.log(project);
    onClose(false);
    setTitle("");
    setContent("");
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
            className="modal-title"
            name="projectTitle"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title"
            maxLength="50"
          />
          <br></br>
          <textarea
            className="modal-content"
            name="projectContent"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder="Content"
            maxLength="300"
          />
          <br></br>
          <div className="btn-group" role="group" aria-label="Basic example">
          <button type="submit" className="btn btn-primary" onClick={() => {}}>
            Add
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              onClose(false);
              setTitle("");
              setContent("");
            }}
          >
            Cancel
          </button>
          </div>
          {children}
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}
