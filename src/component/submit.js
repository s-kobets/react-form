import { getFormSyncErrors, SubmissionError } from 'redux-form'
import { connect } from 'react-redux'

function submit(props) {
    console.log(props)
    new SubmissionError(props.syncErrorsUser)
}

export default connect(
    state => ({
        syncErrorsUser: getFormSyncErrors('user')(state),
        syncErrorsPassengers: getFormSyncErrors('passengers')(state),
    })
)(submit);