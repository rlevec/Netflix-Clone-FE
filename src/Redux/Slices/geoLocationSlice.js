import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    geoLocationInfo: {
        ip: null,
        country_name: null,
        country_calling_code: null,
        city: null,
        timezone: null,
    },
};

export const geoLocationSlice = createSlice({
    name: "geoLocation",
    initialState,
    reducers: {
        setGeoLocation: (state, action) => {
            state.geoLocationInfo = action.payload.geoLocation;
        },
    },
});

export default geoLocationSlice.reducer;

export const { setGeoLocation } = geoLocationSlice.actions;
