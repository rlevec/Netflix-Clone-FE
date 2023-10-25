import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  registeredMail: ""
};

export const registeredMailSlice = createSlice({
  name: "registeredMail",
  initialState,
  reducers: {
    setRegisteredMail: (state, action) => {
      state.registeredMail = action.payload.registeredMail;
    },
  },
});

export default registeredMailSlice.reducer;

export const { setRegisteredMail } = registeredMailSlice.actions;
