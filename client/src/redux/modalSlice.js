import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showPanel: "",
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showPanel: (state, actions) => {
            state.showPanel = actions.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { showPanel } = modalSlice.actions;

export default modalSlice.reducer;
