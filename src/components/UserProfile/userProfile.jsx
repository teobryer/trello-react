import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

function UserProfile(props) {
  const { id } = useParams();

  return (
    <div>
      <h1>Profil de l'utilisateur {id}</h1>
      <nav>
        <NavLink to="about">À propos</NavLink>
        <NavLink to="settings">Paramètres</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default UserProfile;
