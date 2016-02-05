import React, {Component} from 'react';
import Input from 'react-toolbox/lib/input';

export default class FormInput extends Component {

    constructor(props) {
        super(props);
        this.state = {name: ''};
        //this.nameChanged = this.nameChanged.bind(this);
    }

    nameChanged = (name) => {
        this.setState({ name: name});
        this.props.handler(name);
    };

    render() {
        return (
            <section>
                <Input type="text" label='Name'
                       name='name' value={this.state.name}
                       onChange={this.nameChanged}/>
            </section>
        );
    }
}

FormInput.propTypes = { handler: React.PropTypes.func };

