import Header from './header/Header'
import App from './App'
import Company from './../Company';
import React from 'react';
import {Grid} from 'react-flexbox-grid/lib';
import {Router, Route, IndexRoute} from 'react-router';
import ToolboxApp from 'react-toolbox/lib/app';

export default () => {

    return (
        <Grid>
            <ToolboxApp>
                <Router>
                    <Route path="/" component={ Header }>
                        <Route path="app" component={ App }/>
                        <Route path="company" component={ Company }/>
                    </Route>

                </Router>
            </ToolboxApp>

        </Grid>
    );
}