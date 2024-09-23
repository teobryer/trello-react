import React from "react";

const List = ({ isLoggedIn }) => {
  return isLoggedIn ? (
    <button> Se déconnecter</button>
  ) : (
    <button>Se connecter</button>
  );
};

export default List;
