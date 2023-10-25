import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  userMail: null
};

export const userMailSlice = createSlice({
  name: "userMail",
  initialState,
  reducers: {
    setUserMail: (state, action) => {
      state.userMail = action.payload.userMail;
    },
  },
});

export default userMailSlice.reducer;

export const { setUserMail } = userMailSlice.actions;
