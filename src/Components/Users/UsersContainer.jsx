import React from 'react'
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/UsersReducer";
import Users from "./Users";

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch,action) =>{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users)

