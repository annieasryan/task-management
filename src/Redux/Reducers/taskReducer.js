import { ACTION_TYPES } from "../../helpers";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE:
      return {
        tasks: [
          ...state.tasks,
          {
            ...action.payload,
          },
        ],
      };
    case ACTION_TYPES.EDIT:
      return {
        tasks: [
          ...state.tasks.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        ],
      };
    default:
      return state;
  }
};

export default taskReducer;
