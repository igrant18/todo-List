import { createSlice } from "@reduxjs/toolkit";
import { navbarStates } from "../enums/navBarState";


const navBarInitialState = {
    navbarTab: navbarStates.All
}

const navBarSlice = createSlice({
    name: 'Posts',
    initialState: navBarInitialState,
    reducers: {
        changeNavBarTab(state, action) {
            state.navbarTab = action.payload
        }
    }
});

export const { changeNavBarTab } = navBarSlice.actions;

export default navBarSlice.reducer