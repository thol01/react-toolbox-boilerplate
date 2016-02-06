import React, {Component} from 'react';
import FormInput from './../FormInput'

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
            <div>
                <h3>{this.state.name}</h3>
                < FormInput
                    handler={this.handleInput}/>
            </div>

        )
            ;
    }
}
