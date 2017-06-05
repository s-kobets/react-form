import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFormSyncErrors, SubmissionError, submit } from 'redux-form'

export const onSubmit = (values) => {
    if (!values.email) {
        throw new SubmissionError({
            email: 'Require',
        })
    } 
    if (!values.phone) {
        throw new SubmissionError({
            phone: 'Require',
        })
    }
    // console.log(this.props.syncErrorsUser, this.props.syncErrorsPassengers);
}

// console.log(typeof submit())
class Button extends Component {
    renderError = () => {
        // this.props.syncErrorsPassengers
        for (let value in this.props.syncErrorsUser) {
            return (
                <span>{value} - {this.props.syncErrorsUser[value]}</span>
            )
        }
    }

    handleSubmit = () => {
        this.props.dispatch(submit('user'))
    }

    render() {
        // disabled={ this.props.syncErrorsUser || this.props.syncErrorsPassengers ? true : false}
        console.log(1111, this.props)
        return (
            <div>
                <button
                    type="submit"
                    onClick={this.handleSubmit}
                >
                Submit</button>
                <div>{this.renderError()}</div>
            </div>
        )
    }
}

export default connect(
    state => ({
        syncErrorsUser: getFormSyncErrors('user')(state),
        syncErrorsPassengers: getFormSyncErrors('passengers')(state),
    })
)(Button);
