import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import profileReducer from "./profileSlice";
import taskReducer from "./taskSlice";

export const Reducers = {
  COUNTER: "counter",
  TASKS: "tasks",
  PROFILE: "profile",
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: taskReducer,
    profile: profileReducer,
  },
});

export default store;
