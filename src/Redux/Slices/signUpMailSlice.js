import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    signUpMail: ""
};

export const signUpMailSlice = createSlice({
    name: "signUpMail",
    initialState,
    reducers: {
        setSignUpMail: (state, action) => {
            state.signUpMail = action.payload.signUpMail;
        },
    },
});

export default signUpMailSlice.reducer;

export const { setSignUpMail } = signUpMailSlice.actions;
