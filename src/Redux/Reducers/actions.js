import uuid from "react-uuid";
import { ACTION_TYPES } from "../../helpers.js";

export const createTask = (data) => {
  return {
    type: ACTION_TYPES.CREATE,
    payload: {
      id: uuid(),
      title: data.title,
      description: data.description,
      priority: data.priority,
      status: "To Do",
    },
  };
};

export const editTask = ( updatedData ) => {
  return {
    type: ACTION_TYPES.EDIT,
    payload: updatedData,
  };
};
