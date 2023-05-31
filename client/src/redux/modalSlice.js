import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showSearchBar: false,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showSearchBar: (state) => {
            state.showSearchBar = !state.showSearchBar;
        },
    },
});

// Action creators are generated for each case reducer function
export const { showSearchBar } = modalSlice.actions;

export default modalSlice.reducer;
