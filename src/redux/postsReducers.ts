import toDos from "../interfaces/toDos";
import { createSlice } from "@reduxjs/toolkit";

interface ToDoListState {
    toDoList: Array<toDos>,
    isPending: boolean,
    error: string
}

const toDoListInitailState: ToDoListState = {
    toDoList: [],
    isPending: false,
    error: ''
}



const postsSlice = createSlice({
    name: 'Posts',
    initialState: toDoListInitailState,
    reducers: {
        addItem(state, action) {
            state.toDoList.push(action.payload);
        },
        deleteItem(state, action) {
            const index = state.toDoList.findIndex(i => i.title === action.payload.title);
            state.toDoList.splice(index, 1);
        },
        getListSuccess(state, action) {
            state.toDoList = action.payload
        },
        updateList(state, action) {
            const updatedList = state.toDoList.map((item) => {
                if(item.id === action.payload.id)
                    item.completed = action.payload.completed;
                return item;
            });
            state.isPending = false;
            state.toDoList = updatedList
        },
        getListPending(state) {
            state.isPending = true;
        },
        getListError(state, action) {
            state.isPending = false;
            state.error = action.payload
        }
    }
});

export const { addItem, getListSuccess, updateList, getListError, getListPending, deleteItem } = postsSlice.actions;

export default postsSlice.reducer;