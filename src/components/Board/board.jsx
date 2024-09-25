import List from "components/List/list";
import ModalTask from "components/Task/taskForm";
import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { Reducers } from "store";
import { updateTaskState } from "taskSlice";

export const TaskState = {
  Todo: "Todo",
  Doing: "Doing",
  Done: "Done",
};
const Board = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisiblee] = useState(false);
  const tasksList = useSelector((state) => state[Reducers.TASKS].value);

  console.log("tasksList", tasksList);

  const handleCreateTask = () => {
    setModalVisiblee(true);
  };

  const onDragEnd = (result) => {
    // Logique pour mettre à jour l'état de vos tâches après le déplacement
    dispatch(updateTaskState(result));
    console.log(result);
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={handleCreateTask}
        className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ajouter une tâche
      </button>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex">
          <Droppable droppableId="Todo">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="w-1/3"
              >
                à faire
                <List
                  taskArray={tasksList.filter((t) => t.state == TaskState.Todo)}
                />
              </div>
            )}
          </Droppable>
          <Droppable droppableId="Doing">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="w-1/3"
              >
                en cours
                <List
                  taskArray={tasksList.filter(
                    (t) => t.state == TaskState.Doing
                  )}
                />
              </div>
            )}
          </Droppable>
          <Droppable droppableId="Done">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="w-1/3"
              >
                terminé
                <List
                  taskArray={tasksList.filter((t) => t.state == TaskState.Done)}
                />
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
      {modalVisible && <ModalTask setModalVisible={setModalVisiblee} />}
    </div>
  );
};

export default Board;
