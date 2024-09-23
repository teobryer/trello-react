import React from "react";

const Task = ({ isLoggedIn }) => {
  return isLoggedIn ? (
    <button> Se déconnecter</button>
  ) : (
    <button>Se connecter</button>
  );
};

export default Task;
