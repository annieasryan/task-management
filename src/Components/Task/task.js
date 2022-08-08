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
        <h4 className="text-break p-2 ">{task.title}</h4>
        <p className="text-break p-2">{task.description}</p>
        <p className="priority">
          <span>Priority: </span>
          {task.priority}
        </p>
      </div>
      <EditModal show={show} onHide={onHide} task={task}/>
    </>
  );
};

export default Task;
