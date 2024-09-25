import { TaskState } from "components/Board/board";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "taskSlice";
const ModalTask = ({ setModalVisible }) => {
  const modalTaskRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(event.target);
      console.log(modalTaskRef.current);
      if (
        modalTaskRef.current &&
        !modalTaskRef.current.contains(event.target)
      ) {
        //setModalVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div
              ref={modalTaskRef}
              className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
            >
              <div className="sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <TaskFrom setVisible={setModalVisible} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTask;

const TaskFrom = ({ setVisible }) => {
  const taskNameRef = useRef(null);
  const stateRef = useRef(null);
  const descriptionRef = useRef(null);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTask({
        taskName: taskNameRef.current.value,
        state: stateRef.current.value,
        description: descriptionRef.current.value,
      })
    );

    setVisible(false);
  };

  const cancel = (event) => {
    setVisible(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          ref={taskNameRef}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md   
   shadow-sm"
        />
      </div>
      <div>
        <label
          htmlFor="state"
          className="block text-sm font-medium text-gray-700"
        >
          État
        </label>
        <select
          id="state"
          name="state"
          ref={stateRef}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
        >
          {Object.keys(TaskState).map((state) => (
            <option key={state} value={TaskState[state]}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          ref={descriptionRef}
          className="mt-1 p-2   
   w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-medium   
   text-white hover:bg-gray-900"
        >
          Envoyer
        </button>
        <button
          onClick={cancel}
          className="inline-flex items-center px-4 py-2 ml-5 bg-gray-800 border border-transparent rounded-md font-medium   
   text-white hover:bg-gray-900"
        >
          Annuler
        </button>
      </div>
    </form>
  );
};
