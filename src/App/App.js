import React, { Component } from 'react';
import FormInput from './../FormInput'
import {Row, Col} from 'react-flexbox-grid/lib';

export default class App extends Component {

    constructor() {
        super();
        this.state = {name: ''};
        //this.handleInput = this.handleInput.bind(this);
    }

    handleInput = (text) => {
        this.setState( {name: text} );
    };

    render() {
        return (
            <Row>
                <Col md={3}>
                    <h3>{this.state.name}</h3>
                    < FormInput
                        handler={this.handleInput}/>
                </Col>
                <Col md={3}>
                    <h3>NEXT COLUMN</h3>
                </Col>
            </Row>

        );
    }
}
