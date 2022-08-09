import React, { useState } from "react";
import EditModal from "../EditModal/editModal";
import './task.css'

const Task = ({ task }) => {
  const [show, setShow] = useState(false);
  const onHide = () => {
    setShow(false);
  };
  
  return (
    <>
      <div className="single-task" onClick={() => setShow(true)}>
        <h5 className="text-break p-1 m-0">{task.title}</h5>
        <p className="text-break p-1 m-0">{task.description}</p>
        <p className="p-1 m-0">
          <span>Priority: </span>
          {task.priority}
        </p>
      </div>
      <EditModal show={show} onHide={onHide} task={task}/>
    </>
  );
};

export default Task;
