import Task from "components/Task/task";
import TaskEmpty from "components/Task/taskEmpty";
import React from "react";

const List = (props) => {
  return props.taskArray.length > 0 ? (
    <ul role="list" className="rounded-lg bg-blue-100 text-left shadow-xl m-5">
      {props.taskArray.map((t) => (
        <Task task={t} />
      ))}
    </ul>
  ) : (
    <ul role="list" className="rounded-lg bg-blue-100 text-left shadow-xl m-5">
      <TaskEmpty />
    </ul>
  );
};

export default List;
