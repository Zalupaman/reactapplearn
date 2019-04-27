import React, {Component} from 'react';
import Classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {SendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/MessageReducer";


const Dialogs = (props) => {

    let State = props.messagesPage

    let dialogElement = State.dialogData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)

    let messageElement = State.messageData.map(message => <Message key={message.id} message={message.message} id={message.id}/>)

    let newMessageBody = State.newMessageBody

    let onSendMessageClick = () =>{
        props.onSendMessageClick()

    }
    let onNewMessageChange = (e) =>{

       let body =  e.target.value
        props.onMessageChange(body)

    }

    return (
        <div className={Classes.dialogs}>
            <div className={Classes.dialogItem}>
                {dialogElement}
            </div>
            <div className={Classes.message}>
                <div>
                    {messageElement}
                </div>
                <div>
                    <div><textarea placeholder='Enter your message here ' value={newMessageBody} onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;