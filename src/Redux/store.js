import { createStore } from "redux";
import taskReducer from "./Reducers/taskReducer";

const store = createStore(
  taskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

export default store;
