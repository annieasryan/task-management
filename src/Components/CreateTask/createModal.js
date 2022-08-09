import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import { TASK_PRIORITIES } from "../../helpers";
import { createTask } from "../../Redux/Reducers/actions";
import "./createModal.css";

const CreateModal = ({ show, onHide }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const createNewTask = () => {
    dispatch(createTask(data));
    onHide();
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <h5>Create new task</h5>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={handleChange}
            >
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              onChange={handleChange}
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlSelect1"
              onChange={handleChange}
            >
              <Form.Label>Priority</Form.Label>
              <Form.Control as="select" name="priority">
                {TASK_PRIORITIES.map(priority=>(
                  <option key={priority}>{priority}</option>
                ))}
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
