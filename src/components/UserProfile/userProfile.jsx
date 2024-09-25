import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { Reducers } from "store";
import ProfileForm from "./ProfileForm";

function UserProfile(props) {
  const { id } = useParams();
  const profile = useSelector((state) => state[Reducers.PROFILE]);

  return (
    <div>
      <h1>Profil de l'utilisateur {profile.name}</h1>
      {/* <nav>
        <NavLink to="about">À propos</NavLink>
        <NavLink to="settings">Paramètres</NavLink>
      </nav> */}

      <ProfileForm />

      <Outlet />
    </div>
  );
}

export default UserProfile;
