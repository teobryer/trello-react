import List from "components/List/list";
import ModalTask from "components/Task/taskForm";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Reducers } from "store";

export const TaskState = {
  Todo: "Todo",
  Doing: "Doing",
  Done: "Done",
};
const Board = () => {
  const [modalVisible, setModalVisiblee] = useState(false);
  const tasksList = useSelector((state) => state[Reducers.TASKS].value);

  console.log("tasksList", tasksList);

  const handleCreateTask = () => {
    setModalVisiblee(true);
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={handleCreateTask}
        className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ajouter une tâche
      </button>
      <div className="flex">
        <div className="w-1/3">
          à faire
          <List
            taskArray={tasksList.filter((t) => t.state == TaskState.Todo)}
          />
        </div>
        <div className="w-1/3">
          en cours
          <List
            taskArray={tasksList.filter((t) => t.state == TaskState.Doing)}
          />
        </div>
        <div className="w-1/3">
          terminé
          <List
            taskArray={tasksList.filter((t) => t.state == TaskState.Done)}
          />
        </div>
      </div>
      {modalVisible && <ModalTask setModalVisible={setModalVisiblee} />}
    </div>
  );
};

export default Board;
