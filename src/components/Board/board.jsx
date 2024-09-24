import List from "components/List/list";
import ModalTask from "components/Task/taskForm";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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

  const redirect = useLocation();

  const getTasksStateFromURL  = () => {
    return redirect.pathname === "/todo" ? TaskState.Todo : redirect.pathname === "/doing" ? TaskState.Doing :  redirect.pathname === "/done" ? TaskState.Done : null ;
  }

  const filteredTasks = getTasksStateFromURL() ? tasksList.filter((task) => task.state === getTasksStateFromURL()) : tasksList ;

  const handleCreateTask = () => {
    setModalVisible(true);
  };

  const handleMouseDown = (e) => {
    e.target.style.color = "green";
  };
  const handleMouseLeave = (e) => {
    e.target.style.color = "";
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
        <Link to="/todo" className="w-1/3" onMouseUpCapture={handleMouseDown} onMouseLeave={handleMouseLeave}>
          à faire
        </Link>
        <Link to="/doing" className="w-1/3" onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave}>
          en cours
        </Link>
        <Link to="/done" className="w-1/3" onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave}>
          terminé
        </Link>
      </div>

      <div className="flex">
        <List taskArray={ filteredTasks }/>
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
