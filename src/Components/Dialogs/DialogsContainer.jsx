import React, {Component} from 'react';


import {SendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/MessageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";




let mapStateToProps =(State) =>{
    return{
        messagesPage: State.messagesPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        onMessageChange: (body) => {dispatch(updateNewMessageBodyCreator(body))},
        onSendMessageClick: (body) =>{dispatch(SendMessageCreator(body))}
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs);


export default DialogsContainer;