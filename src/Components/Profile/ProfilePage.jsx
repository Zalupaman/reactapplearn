import React, {Component} from 'react'
import Classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const ProfilePage = (props) => {


    return (
        <div className={Classes.ProfileContent}>
            <ProfileInfo/>
            <MyPosts posts={props.State.posts} addpost={props.addpost}/>
        </div>
    );
}

export default ProfilePage;
