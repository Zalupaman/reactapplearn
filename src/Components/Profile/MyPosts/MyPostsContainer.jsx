import React, {Component} from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";

import {connect} from "react-redux";
import MyPosts from "./MyPosts";







let mapStateToProps = (state) =>{
    return{
        posts: state.profilePage.posts ,
        newTextToPost: state.profilePage.newTextToPost
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (text) => {let action =  updateNewPostTextActionCreator(text);
            dispatch(action);},
        addPost: () =>{dispatch(addPostActionCreator())}
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);





export default MyPostsContainer;