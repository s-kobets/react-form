import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFormSyncErrors, SubmissionError, submit } from 'redux-form'

export const onSubmit = (values) => {
    console.log(values)
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
    if (!values.firstName) {
        throw new SubmissionError({
            firstName: 'Require',
        })
    }
    if (!values.lastName) {
        throw new SubmissionError({
            lastName: 'Require',
        })
    }
    if (!values.gender) {
        throw new SubmissionError({
            gender: 'Require',
        })
    }
    if (!values['birthday-day'] || !values['birthday-month'] || !values['birthday-year']) {
        throw new SubmissionError({
            'birthday-day': 'Require',
        })
    }
    if (values.member) {
        let membersArrayErrors = []
        values.member.forEach((member, memberIndex) => {
            let memberErrors = {}
            if (!member || !member.firstName) {
                memberErrors.firstName = 'Required'
                membersArrayErrors[memberIndex] = memberErrors
            }
            if (!member || !member.lastName) {
                memberErrors.lastName = 'Required'
                membersArrayErrors[memberIndex] = memberErrors
            }
            if (!member || !member.gender) {
                memberErrors.gender = 'Required'
                membersArrayErrors[memberIndex] = memberErrors
            }
            if (!member || !member['birthday-day'] || !member['birthday-month'] || !member['birthday-year']) {
                memberErrors['birthday-day'] = 'Required'
                membersArrayErrors[memberIndex] = memberErrors
            }
        })
        if(membersArrayErrors.length) {
            throw new SubmissionError({
                member: membersArrayErrors,
            })
        }
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
        this.props.dispatch(submit('passengers'))
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
