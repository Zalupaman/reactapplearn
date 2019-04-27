import React, {Component} from 'react'
import Classes from './Profile.module.css'

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const ProfilePage = (props) => {


    return (
        <div className={Classes.ProfileContent}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}  />
        </div>
    );
}

export default ProfilePage;
