import React, {Component} from 'react'
import Classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addpost} from "../../../Redux/state";




const  MyPosts = (props) => {
    let postElement = props.posts.map(post => <Post postText={post.message} likeCount={post.likeCount} id={post.id}/>);

    let newPostText = React.createRef();

    let addPost = () => {
        let Text = newPostText.current.value;
        if (Text == '')
            alert('Введите сообщение')

        else
            addpost(Text)

        newPostText.current.value = '';
    }
        return (
            <div className={Classes.MyPosts}>
                <h3>My posts</h3>
                <div className={Classes.NewPosts}>
                    <textarea placeholder='There is no text here , but you can add' ref={newPostText}></textarea> <br/>
                    <button onClick={addPost}>Add Post</button>
                </div>
                <div className={Classes.Posts}>
                    {postElement}
                </div>
            </div>
        )
};

export default MyPosts;