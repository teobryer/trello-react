import List from "components/List/list";
import Task from "components/Task/task";
import React from "react";
const Board = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="w-1/3">
          à faire
          <List>
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
          </List>
        </div>
        <div className="w-1/3">
          en cours
          <List>
            <Task />
            <Task />
            <Task />
          </List>
        </div>
        <div className="w-1/3">
          terminé
          <List>
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
          </List>
        </div>
      </div>
    </div>
  );
};

export default Board;
