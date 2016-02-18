import Layout from './layout/Layout';
import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import ToolboxApp from 'react-toolbox/lib/app';

export default () => {

    return (
        <ToolboxApp>
            <Router>
                <Route path="/" component={ Layout }>

                </Route>
            </Router>
        </ToolboxApp>
    );
}