import React, {Component} from 'react';
import Classes from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () =>
    {
    return (
        <nav className={Classes.nav}>

            <div className={Classes.Item}>
                <NavLink to="/ProfilePage" activeClassName={Classes.active}> Profile</NavLink>
            </div>
            <div className={Classes.Item}>
                <NavLink to="/Dialogs"  activeClassName={Classes.active}>Messages</NavLink>
            </div>
            <div className={Classes.Item}>
                <NavLink to="" activeClassName={Classes.active}>news</NavLink>
            </div>
            <div className={Classes.Item}>
                <NavLink to="" activeClassName={Classes.active}> music</NavLink>
            </div>
            <div className={Classes.Item}>
                <NavLink to="" activeClassName={Classes.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default  Nav;