import React from "react";
import "./Task.css";

import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const history = useNavigate(); //presta tenção

  const handleTaskDetailsClick = () => {
    history(`/${task.title}`);
  };

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="removi-task-button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>
        <button className="see-task-button" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default Task;
