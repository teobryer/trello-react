import Task from "components/Task/task";
import TaskEmpty from "components/Task/taskEmpty";
import React from "react";

const List = (props) => {
  return props.taskArray.length > 0 ? (
    <ul
      role="list"
      className="rounded-lg bg-blue-100 text-left shadow-xl pb-4 m-5"
    >
      {props.taskArray.map((t, index) => (
        <Task key={t.id} task={t} index={index} />
      ))}
    </ul>
  ) : (
    <ul role="list" className="rounded-lg bg-blue-100 text-left shadow-xl m-5">
      <TaskEmpty />
    </ul>
  );
};

export default List;
