import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { actions as storeActions, initialState } from './ducks'
import Counter from './counter'

const maxValue = max => value =>
  value && value >= max ? `incrementFalse` : undefined

const maxValue9 = maxValue(9)

const minValue = min => value =>
 (value || value === 0)  && value <= min ? `decrementFalse` : undefined

const minValue0 = minValue(0)

class Counters extends Component {
  render() {
    return (
      <div>
        <Field
          name="counter.parent"
          component={Counter}
          actions={this.props.actions}
          validate={[maxValue9, minValue0]}
        />
          <Field
            name="counter.children"
            component={Counter}
            actions={this.props.actions}
            validate={[maxValue9, minValue0]}
          />
        </div>
    )
  }
}

// Decorate the form component
const CountersForm = reduxForm({
  form: 'counters',
  initialValues: initialState,
})(Counters);


const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(storeActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountersForm);