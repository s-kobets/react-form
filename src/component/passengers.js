
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';

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

const renderPassengers = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>+ Member</button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((member, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}
        >x</button>
        <Field name={`${member}.firstName`} type="text" component={renderInput} label="Фамилия"/>
        <Field name={`${member}.lastName`} type="text" component={renderInput} label="Имя"/>
        <Field name={`${member}.gender`} component={renderGender} label="Пол"></Field>
      </li>
    )}
  </ul>
)


class Forms extends Component {

  submit = (values) => {
    console.log(values)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.submit)}>
          <Field name="firstName" type="text" component={renderInput} label="Фамилия"/>
          <Field name="lastName" type="text" component={renderInput} label="Имя"/>
          <Field name="gender" component={renderGender} label="Пол"></Field>

          <FieldArray name="member" component={renderPassengers}/>

          <button>Submit</button>
        </form>
      </div>
    )
  }
}

// Decorate the form component
const reduxForms = reduxForm({
  form: 'passengers',
  validate
})(Forms);

// const selector = formValueSelector('passengers')

// const mapStateToProps = (state) => {
//   const {firstName, lastName, gender} = selector(state, 'firstName', 'lastName', 'gender')

//   return {
//      dataPassengers: { 
//       firstName,
//       lastName,
//       gender,
//     }
//   }
// }

export default connect()(reduxForms);