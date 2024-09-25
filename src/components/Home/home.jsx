import DocumentTitle from "components/DocumentTitle/documentTitle";
import UserData from "components/UserData/userData";
import { decrement, increment } from "counterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Reducers } from "store";

const Home = () => {
  const count = useSelector((state) => state[Reducers.COUNTER].value);
  const dispatch = useDispatch();

  return (
    <div>
      Accueil
      <div className="m-5 text-center">
        <h1 className="text-3xl font-bold">Le compteur est à : {count}</h1>
        <button
          onClick={() => dispatch(increment())}
          className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Incrémenter
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Décrémenter
        </button>
      </div>
      <DocumentTitle />
      <div className="m-3">
        <UserData />
      </div>
    </div>
  );
};

export default Home;
