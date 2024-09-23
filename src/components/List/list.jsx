import React from "react";

const List = (props) => {
  return (
    <ul role="list" className="rounded-lg bg-blue-100 text-left shadow-xl m-5">
      {props.children}
    </ul>
  );
};

export default List;
