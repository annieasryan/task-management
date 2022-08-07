import { ACTION_TYPES } from "./types";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE:
      return {
        ...state,
        tasks: action.payload,
      };
    case ACTION_TYPES.EDIT:
      return {
        ...state,
        tasks: state.tasks.map(task=> {
          if(task.id === action.payload.id) {
            return action.payload.params
          }
        })
      };
    default:
      return state;
  }
};

export default taskReducer