import ToolboxApp from 'react-toolbox/lib/app';
import AppBar from 'react-toolbox/lib/app_bar';
import {Link} from 'react-router'
import React from 'react';

export default () => {
    return (
        <ToolboxApp>
            <AppBar class="row" fixed flat>
                <Link className="col s1" to="/company">Company</Link>
                <Link className="col s3" to="/app">App</Link>
            </AppBar>
        </ToolboxApp>
    );
}