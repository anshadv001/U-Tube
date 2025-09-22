import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    showSignupModal: false,
    userData: null,
  },
  reducers: {
    setShowSignupModalTrue: (state) => {
      state.showSignupModal = true;
    },
    setShowSignupModalFalse: (state) => {
      state.showSignupModal = false;
    },
    addUser: (state, action) => {
      state.userData = action.payload;
      console.log(state.userData);
    },
    removeUser: (state) => {
      state.userData = null;
    },
  },
});

export const {
  addUser,
  removeUser,
  setShowSignupModalTrue,
  setShowSignupModalFalse,
} = userSlice.actions;
export default userSlice.reducer;
