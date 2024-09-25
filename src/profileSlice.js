import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  bio: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateBio: (state, action) => {
      state.bio = action.payload;
    },
    resetProfile: (state) => {
      return initialState;
    },
  },
});

export const { updateName, updateEmail, updateBio, resetProfile } =
  profileSlice.actions;
export default profileSlice.reducer;
