import List from "components/List/list";
import React from "react";
const Board = () => {
  const tasksListToDo = [
    { taskName: "t1", description: "grjjhiyjihjihijiythjhijh" },
    { taskName: "t1", description: "grjjhiyjihjihijiythjhijh" },
    { taskName: "t1", description: "grjjhiyjihjihijiythjhijh" },
    { taskName: "t1", description: "grjjhiyjihjihijiythjhijh" },
    { taskName: "t1", description: "grjjhiyjihjihijiythjhijh" },
  ];

  const tasksLitDoing = [
    { taskName: "t1", description: "grjjhiyjihjihijiythjhijh" },
    { taskName: "t1", description: "grjjhiyjihjihijiythjhijh" },
    { taskName: "t1", description: "grjjhiyjihjihijiythjhijh" },
    { taskName: "t1", description: "grjjhiyjihjihijiythjhijh" },
    { taskName: "t1", description: "grjjhiyjihjihijiythjhijh" },
  ];

  const tasksListDone = [
    { taskName: "t1", description: "grjjhiyjihjihijiythjhijh" },
    { taskName: "t1", description: "grjjhiyjihjihijiythjhijh" },
    { taskName: "t1", description: "grjjhiyjihjihijiythjhijh" },
    { taskName: "t1", description: "grjjhiyjihjihijiythjhijh" },
    { taskName: "t1", description: "grjjhiyjihjihijiythjhijh" },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="w-1/3">
          à faire
          <List taskArray={tasksListToDo} />
        </div>
        <div className="w-1/3">
          en cours
          <List taskArray={tasksLitDoing} />
        </div>
        <div className="w-1/3">
          terminé
          <List taskArray={tasksListDone} />
        </div>
      </div>
    </div>
  );
};

export default Board;
