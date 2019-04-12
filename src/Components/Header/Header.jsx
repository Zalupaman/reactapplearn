import React, { Component } from 'react';
import Classes from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = () => {
    return(

    <header className={Classes.header}>
        <NavLink to={'/ProfilePage'}><img src='http://северпрод.рф/upload/iblock/492/mts.jpg' alt='LOGO'/></NavLink>
    </header>
    );
}

export default Header;