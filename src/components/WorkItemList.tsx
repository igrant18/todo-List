import React from "react";
import WorkItem from "./WorkItem";
import toDos from '../interfaces/toDos'
import { navbarStates } from "../enums/navBarState";
import { PAGE_LIMIT } from '../redux/constants'

function WorkItemList(props) {
    const list: Array<toDos> = props.list;
    const navbarTab: navbarStates = props.navBarState;
    const currentPage: number = props.currentPage;
    const pageSize: number = PAGE_LIMIT;
    const maxLimit = currentPage * pageSize;
    const minLimit = maxLimit - pageSize;

    const filterItems = (filterBy: navbarStates, list: Array<toDos>): Array<toDos> => {
      if(filterBy === navbarStates.All) 
        return list;
      if (filterBy === navbarStates.Completed) {
        list = list.filter((item) => {
          return item.completed === true;
        });
        return list;
      }
      list = list.filter((item) => {
        return item.completed === false;
      });
      return list;
    }

    const display = filterItems(navbarTab, list).map((item, index) => {
      if(index <= maxLimit && index >= minLimit) {
        return <WorkItem key={item.id} item={item} />
      }
      return <p/>
      
    });

    return (
      <div className="ml0 center ba b--light-silver br2 w-100">
        { display }
      </div>
    );
  }
  
export default WorkItemList;

