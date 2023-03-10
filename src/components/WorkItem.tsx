import React from "react";
import toDos from "../interfaces/toDos";
import { useDispatch } from 'react-redux';
import { updateList, deleteItem } from "../redux/postsReducers";


const WorkItem = (props) => {
    const { title, completed, id }: toDos = props.item;

    const dispatch = useDispatch();
    const onCheckClicked = () => {
        dispatch(updateList({ id: id, title: title, completed: !completed }))
    }
    const onDeleteClicked = () => {
        dispatch(deleteItem({id: id, title: title}))
    }

    return (
        <div className="ph3 pv3 bb b--light-silver">
            <div className="flex items-center mb2">
                <input className="mr2" type="checkbox" id="spacejam" defaultChecked={completed} onClick={onCheckClicked} />
                <p className="ma1">{ title }</p>
                <button id="delete-button" onClick={onDeleteClicked}>
                    <svg style={{paddingRight: '1px', paddingTop: '3px'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default WorkItem;