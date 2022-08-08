import { Button, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../Redux/Reducers/actions";

const CreateModal = ({ show, onHide }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const createNewTask = () => {
    dispatch(createTask(data));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    onHide();
  };
 

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton/>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={handleChange}
            >
              <Form.Label>Task title</Form.Label>
              <Form.Control type="text" name="title" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              onChange={handleChange}
            >
              <Form.Label>Task description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlSelect1"
              onChange={handleChange}
            >
              <Form.Label>Task priority</Form.Label>
              <Form.Control as="select" name="priority">
                <option></option>
                <option>Low</option>
                <option>Normal</option>
                <option>High</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary w-100" type="submit" onClick={createNewTask}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateModal;
