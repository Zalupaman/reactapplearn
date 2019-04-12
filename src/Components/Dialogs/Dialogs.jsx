import React, {Component} from 'react';
import Classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";






const Dialogs = (props) => {
    let dialogElement = props.State.dialogData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)


    let messageElement = props.State.messageData.map(message => <Message message={message.message} id={message.id}/>)

    return (
        <div className={Classes.dialogs}>
            <div className={Classes.dialogItem}>
                {dialogElement}
            </div>
            <div className={Classes.message}>
                {messageElement}
            </div>
        </div>
    );
}

export default Dialogs;