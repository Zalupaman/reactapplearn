import React, {Component} from 'react'
import Classes from './Post.module.css'
import {addLikeCount} from "../../../../Redux/store";


const Post = (props) => {


    return (
        <div className={Classes.Item}>
            <img src='http://cdn.askme.zone/images/103/115/1150.png' alt='AVA'/>

            {props.postText}
            <div>
                <button > Like </button> {props.likeCount}
            </div>
        </div>


    )
}

export default Post;