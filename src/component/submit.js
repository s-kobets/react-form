import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFormSyncErrors, getFormAsyncErrors } from 'redux-form'

class Button extends Component {
    handleSubmit = () => {
        console.log(this.props.syncErrorsUser, this.props.syncErrorsPassengers);
    }

    renderError() {
        // this.props.syncErrorsPassengers
        for (let value in this.props.syncErrorsUser) {
            return (
                <span>{value} - {this.props.syncErrorsUser[value]}</span>
            )
        }
    } 

    render() {
        return (
            <div>
                <button 
                    onClick={this.handleSubmit}
                    disabled={ this.props.syncErrorsUser || this.props.syncErrorsPassengers ? true : false}                >Submit</button>
                {/*<div>{this.renderError()}</div>*/}
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
