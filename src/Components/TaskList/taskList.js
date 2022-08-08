import React from "react";
import Task from "../Task/task";
import "./taskList.css";

const TaskList = ({ status, tasks }) => {
  return (
    <div>
      <div className="text-uppercase text-center status-header">
        <h6 className="mb-0">{status}</h6>
      </div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
