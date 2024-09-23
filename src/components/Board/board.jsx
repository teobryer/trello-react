import React from "react";

const Board = ({ isLoggedIn }) => {
  return isLoggedIn ? (
    <button> Se déconnecter</button>
  ) : (
    <button>Se connecter</button>
  );
};

export default Board;
