
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (!/[a-zA-Z]$/i.test(values.firstName)) {
    errors.firstName = 'только латинские буквы'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (!/[a-zA-Z]$/i.test(values.lastName)) {
    errors.lastName = 'только латинские буквы'
  }
  return errors
}

const renderInput = ({ input, label, type, meta: { touched, error } }) => (
    <label>
      {label}
      <input
        {...input}
        type={type}
        placeholder={label}
        errorText={touched && error && error}
        error={touched && error && true}
        success={touched && !error && true}
      />
    </label>
)

const renderGender = ({ input, label, type, meta: { touched, error } }) => (
    <label>
      {label}
      <Field name={input.name} component="select">
        <option></option>
        <option value="male">M</option>
        <option value="female">Ж</option>
      </Field>
      {touched && error && <span>{error}</span>}
    </label>
)

class Forms extends Component {
  render() {
    return (
      <div>
        <form>
          <Field name="firstName" type="text" component={renderInput} label="Фамилия"/>
          <Field name="lastName" type="text" component={renderInput} label="Имя"/>
          <Field name="gender" component={renderGender} label="Пол"></Field>
        </form>
        <code>firstName {this.props.dataPassengers.firstName}</code>
        <br/>
        <code>lastName {this.props.dataPassengers.lastName}</code>
        <br/>
        <code>gender {this.props.dataPassengers.gender}</code>
      </div>
    )
  }
}

// Decorate the form component
const reduxForms = reduxForm({
  form: 'passengers',
  validate
})(Forms);

const selector = formValueSelector('passengers')

const mapStateToProps = (state) => {
  const {firstName, lastName, gender} = selector(state, 'firstName', 'lastName', 'gender')

  return {
    dataPassengers: {
      firstName,
      lastName,
      gender,
    }
  }
}

export default connect(mapStateToProps)(reduxForms);