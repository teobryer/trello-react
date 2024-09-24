import React from "react";
import { useParams } from "react-router-dom";

function UserAbout() {
  const { id } = useParams();

  return <div>à propos de l'utilisateur {id}</div>;
}

export default UserAbout;
