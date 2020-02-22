import {render} from 'react-dom'
import App from './App'
import React from 'react'
import './index.less'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'



render(
    <Router>
        <App></App>
    </Router>
    ,document.getElementById('root')
);
