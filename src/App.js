import React, { Component } from 'react';
import Header from './Components/Header/Header'
import './App.css';
import Nav from "./Components/Navbar/Nav";
import ProfilePage from "./Components/Profile/ProfilePage";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addpost} from "./Redux/state";



const App = (props) => {
  return (

        <div className='app-wrapper'>
            <Header />
            <Nav />
                <div className='app-wrapper-content' >
                    <Route path='/Dialogs' render={() => <Dialogs State={props.State.messagesPage} />} />
                    <Route path='/ProfilePage' render={() => <ProfilePage State={props.State.profilePage} addpost={props.addpost}/> }/>
            </div>
        </div>

);
}


export default App;
