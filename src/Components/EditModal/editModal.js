import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import { TASK_PRIORITIES, TASK_STATUSES } from "../../helpers";
import { editTask } from "../../Redux/Reducers/actions";

const EditModal = ({ task, show, onHide }) => {
  const [updatedData, setUpdatedData] = useState({
    id: task.id,
    title: task.title,
    description: task.description,
    priority: task.priority,
    status: task.status,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUpdatedData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEdit = () => {
    dispatch(editTask(updatedData));
    onHide();
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton />
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={handleChange}
            >
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                defaultValue={updatedData.title}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              onChange={handleChange}
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                defaultValue={updatedData.description}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlSelect1"
              onChange={handleChange}
            >
              <Form.Label>Priority</Form.Label>
              <Form.Control
                as="select"
                name="priority"
                defaultValue={updatedData.priority}
              >
                {TASK_PRIORITIES.map((priority) => (
                  <option key={priority}>{priority}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlSelect2"
              onChange={handleChange}
            >
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                defaultValue={updatedData.status}
              >
                {TASK_STATUSES.map((status) => (
                  <option key={status}>{status}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary w-100" type="submit" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
