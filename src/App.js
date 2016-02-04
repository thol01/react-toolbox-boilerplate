import React, {Component} from 'react';
import ToolboxApp from 'react-toolbox/lib/app';
import Button from 'react-toolbox/lib/button';

export default class App extends Component {
    render() {
        return (
            <ToolboxApp>
                <h1>React Toolbox!</h1>
                <Button raised accent label='test'/>
            </ToolboxApp>
        );
    }
}
