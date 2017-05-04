
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

class Forms extends Component {
  render() {
    return (
      <form>
        <Field name="FirstName" type="text" component={renderField} label="FirstName"/>
        <Field name="LastName" type="text" component={renderField} label="LastName"/>

      </form>
    )
  }
}

// Decorate the form component
const reduxForms = reduxForm({
  form: 'passengers',
})(Forms);

export default connect()(reduxForms);