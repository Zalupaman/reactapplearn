import React, {Component} from 'react'
import Classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";





const  MyPosts = (props) => {

    let postElement = props.posts.map(post => <Post postText={post.message} likeCount={post.likeCount} id={post.id } dispatch={props.dispatch} />);

    let newPostText = React.createRef();

    let addPost = () => {
        let text = newPostText.current.value;

        if (text == '') {
            alert('Введите сообщение')
        }
        else {
            props.addPost()
        }
    };

    let onTextChange = () =>{
        let text = newPostText.current.value;
            props.updateNewPostText(text)
    };

        return (
            <div className={Classes.MyPosts}>
                <h3>My posts</h3>
                <div className={Classes.NewPosts}>
                    <textarea placeholder='There is no text here , but you can add' ref={newPostText} onChange={onTextChange} value={props.newTextToPost}/> <br/>

                    <button onClick={addPost}>Add Post</button>
                </div>
                <div className={Classes.Posts}>
                    {postElement}
                </div>
            </div>
        )
};

export default MyPosts;