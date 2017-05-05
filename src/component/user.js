import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'не верный email'
  }
  if (!values.phone) {
    errors.phone = 'Required'
  }
  return errors
}

const normalizePhone = (value) => {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/[^\d]/g, '')

  if (onlyNums.length <= 3) {
    return onlyNums
  }
  if (onlyNums.length <= 7) {
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`
  }
  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`
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

class Forms extends Component {
  render() {
    return (
      <div>
        <form>
          <Field name="email" type="email" component={renderInput} label="Электронная почта"/>
          <Field name="phone" type="tel" component={renderInput} normalize={normalizePhone} label="Телефон"/>
        </form>
      </div>
    )
  }
}

// Decorate the form component
const reduxForms = reduxForm({
  form: 'user',
  validate
})(Forms);

export default connect()(reduxForms);