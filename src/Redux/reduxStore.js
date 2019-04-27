import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {messageReducer} from "./MessageReducer";
import {UsersReducer} from "./UsersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage:  UsersReducer
})

let store = createStore(reducers);

export default store;