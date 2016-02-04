import React, {Component} from 'react';
import ToolboxApp from 'react-toolbox/lib/app';
import Button from 'react-toolbox/lib/button';
import InputX from './Input'

export default class App extends Component {

    constructor() {
        super();
        this.state = {name: ""};
        //this.handleInput = this.handleInput.bind(this);
    }

    handleInput = (text) => {
        this.setState({name: text});
    };

    render() {
        return (
            <ToolboxApp>
                <h1>React Toolbox!</h1>
                <h3>THIS IS : {this.state.name}</h3>
                <Button raised accent label='test'/>
                <InputX handler={this.handleInput}/>
            </ToolboxApp>
        );
    }
}
