import React, { useEffect, useContext, useState } from "react";
import { TaskContext } from "./Context";

function Project(props) {
  const { setProject, project } = React.useContext(TaskContext);

  useEffect(() => {
    fetch("http://localhost:3001/project")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setProject(jsonRes));
  }, [project, setProject]);

  if (!project){
      return null;
  }
  return (
    <div>
      {project.map((projects) => {
        return (
          <div>
            <h1>{projects.title}</h1>
            <p>{projects.content}</p>
            <button></button>
          </div>
        );
      })}
    </div>
  );
}

export default Project;
