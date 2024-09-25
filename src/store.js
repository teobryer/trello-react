import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import taskReducer from "./taskSlice";

export const Reducers = {
  COUNTER: "counter",
  TASKS: "tasks",
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: taskReducer,
  },
});

export default store;
