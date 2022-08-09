import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TASK_STATUSES } from "./helpers";
import TaskList from "./Components/TaskList/taskList";
import CreateModal from "./Components/CreateTask/createModal";
import "./app.css";

function App() {
  const [show, setShow] = useState(false);
  const onHide = () => {
    setShow(false);
  };

  const tasks = useSelector((state) => state.tasks);
 
  const drawTaskByStatus = () => (
    TASK_STATUSES.map(status => {
        const filteredTask = tasks.filter(task=>task.status === status)
        return (
          <div key={status} className="w-50 status-container">
          <TaskList key={status} status={status} tasks={filteredTask}/>
          </div>
        )
    })
)

  return (
    <div className="container-fluid">
      <h4 className="text-light text-center text-uppercase mt-3">
        Task management platform
      </h4>
      <div className="container">
        <nav>
          <button className="btn" onClick={() => setShow(true)}>
            Add Task
          </button>
        </nav>
        <CreateModal show={show} onHide={onHide}/>
        <div className="task-list mt-3">
          {drawTaskByStatus()}
        </div>
        </div>
    </div>
  );
}

export default App;
