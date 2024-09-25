import { resetProfile, updateBio, updateEmail, updateName } from "profileSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Reducers } from "store";

function ProfileForm() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state[Reducers.PROFILE]);

  const handleReset = () => {
    dispatch(resetProfile());
  };

  return (
    <div className="max-w-md mx-auto space-y-4">
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
          value={profile.name}
          onChange={(e) => dispatch(updateName(e.target.value))}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md   
shadow-sm"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={profile.email}
          onChange={(e) => dispatch(updateEmail(e.target.value))}
          className="mt-1 p-2   
w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label
          htmlFor="bio"
          className="block text-sm font-medium text-gray-700"
        >
          Bio
        </label>
        <textarea
          id="bio"
          name="bio"
          rows={4}
          value={profile.bio}
          onChange={(e) => dispatch(updateBio(e.target.value))}
          className="mt-1 p-2   
w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button
        className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-medium   
text-white hover:bg-gray-900"
        onClick={handleReset}
      >
        Réinitialiser
      </button>
    </div>
  );
}

export default ProfileForm;
