import React from "react";
import { navbarStates } from "../enums/navBarState"

const NavBar = ({currentNavbarTab, onNavBarChange}) => {

    return (
        <nav className="pa3">
            <input onClick={onNavBarChange} className={"link dim gray b f6 f5-ns dib mr3 " + (currentNavbarTab === navbarStates.All ? 'active' : '') } type='button' value='ALL'></input>
            <input onClick={onNavBarChange} className={"link dim gray b f6 f5-ns dib mr3 " + (currentNavbarTab === navbarStates.Pending ? 'active' : '') } type='button' value='PENDING'></input>
            <input onClick={onNavBarChange} className={"link dim gray b f6 f5-ns dib mr3 " + (currentNavbarTab === navbarStates.Completed ? 'active' : '') } type='button' value='COMPLETED'></input>
        </nav>
    )
}

export default NavBar;
