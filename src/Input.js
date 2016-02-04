import React, {Component} from 'react';

export default class InputX extends Component {

    constructor(props) {
        super(props);
        //this.nameChanged = this.nameChanged.bind(this);
    }

    nameChanged = (event) => {
        this.props.handler(event.target.value);

    };

    render() {
        return (
            <section>
                <input type="text" label='Name' name='name'
                       onChange={this.nameChanged}/>
            </section>
        );
    }
}

InputX.propTypes = { handler: React.PropTypes.func };

