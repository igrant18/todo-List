import { createSlice } from "@reduxjs/toolkit";


const paginationInitialState = {
    currentPage: 1
}

const paginationSlice = createSlice({
    name: 'Pagination',
    initialState: paginationInitialState,
    reducers: {
        changeCurrentPage(state, action) {
            const currentPage = Number(action.payload)
            
            if(action.payload === '<') {
                state.currentPage = state.currentPage - 1
            } else if(action.payload === '>') {
                state.currentPage = state.currentPage + 1
            } else {
                state.currentPage = currentPage
            }
        }
    }
});

export const { changeCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer