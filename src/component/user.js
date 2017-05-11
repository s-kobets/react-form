import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Input } from '@kupibilet/ui'
import { validateUser as validate } from '../validate'

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
      { type === 'tel' ?  <Input
        {...input}
        type={type}
        placeholder={label}
        errorText={touched && error && error}
        error={touched && error && true}
        success={touched && !error && true}
        size="small"
        value={input.value || '9'}
      /> :  <Input
        {...input}
        type={type}
        placeholder={label}
        errorText={touched && error && error}
        error={touched && error && true}
        success={touched && !error && true}
        size="small"
      />
      }
     
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
  validate,
})(Forms);

export default connect()(reduxForms);