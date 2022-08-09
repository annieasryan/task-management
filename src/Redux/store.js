import { createStore } from "redux";
import storage from 'redux-persist/lib/storage' 
import { persistStore, persistReducer } from 'redux-persist'
import taskReducer from "./Reducers/taskReducer";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, taskReducer)

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

export const persistor = persistStore(store)

export default store;
