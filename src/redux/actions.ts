import toDos from "../interfaces/toDos";
import { getListSuccess, getListPending, getListError } from "./postsReducers";

export const requestTodoList = () => async (dispatch) => {
    dispatch(getListPending());
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const list: Array<toDos> = await response.json();
        await dispatch(getListSuccess(list));

    } catch(error) {
        await dispatch(getListError(error));
    };
}