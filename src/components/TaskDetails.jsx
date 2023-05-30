import React from "react";
import Button from "./Button";
import { useParams, useNavigate } from "react-router-dom";
import "./TaskDetails.css";
import Timer from "./Timer";

const TaskDetails = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const params = useParams();
  return (
    <div>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>

        <Timer />
      </div>
    </div>
  );
};

export default TaskDetails;
