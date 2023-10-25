import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    activeLanguage: "English"
}

export const activeLanguageSlice = createSlice({
    name: "activeLanguage",
    initialState,
    reducers: {
        setActiveLanguage: (state, action) => {
            state.activeLanguage = action.payload.activeLanguage
        }
    }
})

export default activeLanguageSlice.reducer

export const {setActiveLanguage} = activeLanguageSlice.actions