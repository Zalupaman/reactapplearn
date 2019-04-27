import React from 'react';
import Header from './Components/Header/Header'
import './App.css';
import Nav from "./Components/Navbar/Nav";
import ProfilePage from "./Components/Profile/ProfilePage";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";


const App = (props) => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/Dialogs' render={() => <DialogsContainer store={props.store} />}/>
                <Route path='/ProfilePage'
                       render={() => <ProfilePage store={props.store}/>}/>
                <Route path='/Users'
                       render={() => <UsersContainer />}/>
            </div>
        </div>

    );
}


export default App;
