import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logOutUserAction: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loadUser, logOutUserAction } = userReducer.actions;
export default userReducer.reducer;
