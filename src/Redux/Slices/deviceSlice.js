import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    device: null
}

export const deviceSlice = createSlice({
    name: "device",
    initialState,
    reducers: {
        setDevice: (state, action) => {
            state.device = action.payload.device
        }
    }
})

export default deviceSlice.reducer

export const {setDevice} = deviceSlice.actions