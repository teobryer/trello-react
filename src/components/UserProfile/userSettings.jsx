import React from "react";
import { useParams } from "react-router-dom";

function UserSettings() {
  const { id } = useParams();

  return <div>paramètres de l'utilisateur {id}</div>;
}

export default UserSettings;
