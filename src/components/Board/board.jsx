import List from "components/List/list";
import ModalTask from "components/Task/taskForm";
import React, { useState } from "react";

export const TaskState = {
  Todo: "Todo",
  Doing: "Doing",
  Done: "Done",
};
const Board = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasksList, setTaskList] = useState([
    {
      taskName: "t1",
      description: "grjjhiyjihjihijiythjhijh",
      state: TaskState.Todo,
    },
    {
      taskName: "t1",
      description: "grjjhiyjihjihijiythjhijh",
      state: TaskState.Todo,
    },
    {
      taskName: "t1",
      description: "grjjhiyjihjihijiythjhijh",
      state: TaskState.Doing,
    },
    {
      taskName: "t1",
      description: "grjjhiyjihjihijiythjhijh",
      state: TaskState.Doing,
    },
    {
      taskName: "t1",
      description: "grjjhiyjihjihijiythjhijh",
      state: TaskState.Done,
    },
  ]);

  const handleCreateTask = () => {
    setModalVisible(true);
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
      {modalVisible && (
        <ModalTask
          setModalVisible={setModalVisible}
          setTaskList={setTaskList}
        />
      )}
    </div>
  );
};

export default Board;
