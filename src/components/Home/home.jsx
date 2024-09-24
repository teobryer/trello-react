import DocumentTitle from "components/DocumentTitle/documentTitle";
import UserData from "components/UserData/userData";
import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      Accueil
      <div className="m-5 text-center">
        <h1 className="text-3xl font-bold">Le compteur est à : {count}</h1>
        <button
          onClick={increment}
          className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Incrémenter
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
