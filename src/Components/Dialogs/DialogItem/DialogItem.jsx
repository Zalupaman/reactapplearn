import React,{Component} from 'react'
import Classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={Classes.dialog + ' ' + Classes.active}><NavLink to={path}> {props.name} </NavLink></div>
    );
}

export default DialogItem;