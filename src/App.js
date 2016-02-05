import React, {Component} from 'react';
import ToolboxApp from 'react-toolbox/lib/app';
import Button from 'react-toolbox/lib/button';
import FormInput from './FormInput'

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
                <h3>{this.state.name}</h3>
                <FormInput handler={this.handleInput}/>
            </ToolboxApp>
        );
    }
}
