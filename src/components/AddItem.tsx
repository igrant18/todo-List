import React from "react";
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/postsReducers';
import { v4 as uuidv4 } from 'uuid';

const AddItem = () => {
    let newTitle;
    const dispatch = useDispatch();
    const onAddItemClicked = e => {
        e.preventDefault();
        const randomId = uuidv4();
        dispatch(addItem({ id:randomId, title: newTitle, completed: false }));
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        newTitle = '';
    }
    const onTitleChange = event => {
        newTitle = event.target.value;
    }
    
    return (
        <form className="cf" onSubmit={onAddItemClicked}>
            <input id="newTitle" className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Add Item" type="text" onChange={onTitleChange} value={newTitle} required/>
            <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-70 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Add Item"/>
        </form>
    )
}

export default AddItem;