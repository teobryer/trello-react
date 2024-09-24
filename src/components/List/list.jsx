import Task from "components/Task/task";
import React from "react";

const List = (props) => {
  return (
    <ul role="list" className="rounded-lg bg-blue-100 text-left shadow-xl m-5">
      {props.taskArray.map((t) => (
        <Task taskName={t.taskName} />
      ))}
    </ul>
  );
};

export default List;
