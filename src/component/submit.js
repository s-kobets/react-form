import React, { Component } from 'react';
import { connect } from 'react-redux';

class Button extends Component {
    handleSubmit = () => {
        console.log(this.props.formStoreUser.values, this.props.formStorePassengers.values);
    }

    render() {
        return (
            <button onClick={this.handleSubmit}>Submit</button>
        )
    }
}

export default connect(
    state => ({
        formStoreUser: state.form.user,
        formStorePassengers: state.form.passengers
    })
)(Button);
