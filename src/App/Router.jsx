import Header from './header/Header'
import App from './App'
import Company from './../Company';
import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

export default () => {

    return (
        <Router>
            <Route path="/" component={ Header }>
                <Route path="app" component={ App }/>
                <Route path="company" component={ Company }/>
            </Route>

        </Router>
    );
}