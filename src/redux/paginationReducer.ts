import { createSlice } from "@reduxjs/toolkit";


const paginationInitialState = {
    currentPage: 1
}

const paginationSlice = createSlice({
    name: 'Pagination',
    initialState: paginationInitialState,
    reducers: {
        changeCurrentPage(state, action) {
            state.currentPage = action.payload
        }
    }
});

export const { changeCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer