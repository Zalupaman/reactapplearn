import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addpost} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderWholeTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App State={state} addpost={addpost}/>
        </BrowserRouter>,
        document.getElementById('root'));
};




