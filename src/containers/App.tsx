import React, { Component } from "react";
import WorkItemList from "../components/WorkItemList";
import AddItem from "../components/AddItem"
import NavBar from "../components/NavBar";
import { connect } from "react-redux";
import { requestTodoList } from '../redux/actions'
import { navbarStates } from '../enums/navBarState'
import toDos from "../interfaces/toDos";
import Scroll from "../components/Scroll";
import { changeNavBarTab } from '../redux/navBarReducer'
import Pagination from "../components/Pagination";
import { changeCurrentPage } from "../redux/paginationReducer";
import { PAGE_LIMIT } from "../redux/constants";

interface PassedProps {
  navbarTab: navbarStates,
  onNavBarChange: any,
  onRequestToDoList: any,
  toDoList: Array<toDos>,
  currentPage: number,
  onPageChange: any
}

const mapStateToProps = state => {
  return { 
    navbarTab: state.navBarReducer.navbarTab,
    toDoList: state.postsReducer.toDoList,
    currentPage: state.paginationReducer.currentPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
      onNavBarChange: (event) => dispatch(changeNavBarTab(event.target.value)),
      onRequestToDoList: () => dispatch(requestTodoList()),
      onPageChange: (event) => dispatch(changeCurrentPage(event.target.value))
  }
}

class App extends Component<PassedProps> {
  async componentDidMount() {
    await this.props.onRequestToDoList();
  }

  render() {
    const { navbarTab, onNavBarChange, currentPage, onPageChange, toDoList } = this.props;
    return (
      <div className="mw8 center bg-light-gray pa3 ph5-ns h-100 hide-scroll">
        <AddItem />
        <NavBar currentNavbarTab={navbarTab} onNavBarChange={onNavBarChange}/>
        <Scroll>
          <WorkItemList currentPage={currentPage} list={this.props.toDoList} navBarState={navbarTab} />
        </Scroll>
        <Pagination currentPage={currentPage} pageSize={PAGE_LIMIT} totalCount={toDoList.length} onPageChange={onPageChange} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
