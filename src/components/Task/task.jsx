import { TaskState } from "components/Board/board";
import React from "react";

const Task = ({ task }) => {
  const handleAvancer = () => {
    if (task.state == TaskState.Todo) {
      task.state = TaskState.Doing;
    }
    if (task.state == TaskState.Doing) {
      task.state = TaskState.Done;
    }
  };

  const handleReculer = () => {
    if (task.state == TaskState.Done) {
      task.state = TaskState.Doing;
    }
    if (task.state == TaskState.Doing) {
      task.state = TaskState.Todo;
    }
  };

  return (
    <li className="flex justify-center gap-x-6 pt-4">
      <div className="flex min-h-full items-end justify-center px-4 text-center sm:items-center w-full">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full">
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3
                  className="text-base font-semibold leading-6 text-gray-900"
                  id="modal-title"
                >
                  {task.taskName}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{task.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            {task.state !== TaskState.Done && (
              <button
                onClick={handleAvancer}
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Avancer
              </button>
            )}

            {task.state !== TaskState.Todo && (
              <button
                type="button"
                onClick={handleReculer}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Reculer
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Task;
