import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import { validate } from '../validate'
import { Input, BlockChecked } from '@kupibilet/ui'

const renderInput = ({ input, label, type, meta: { touched, error } }) => (
    <label>
      {label}
      <Input
        {...input}
        type={type}
        placeholder={label}
        errorText={touched && error && error}
        error={touched && error && true}
        success={touched && !error && true}
        size="small"
        placeholder=""
      />
    </label>
)

const renderChecked = ({ input, label, type, title, index, meta: { touched, error } }) => (
    <BlockChecked
      name={`radio${index}`}
      title={title}
      error={touched && error && true}
      success={touched && !error && true}
      htmlFor={`name${index}`}
      value="adult"
      price="1234"
    />
)

const renderGender = ({ input, label, type, meta: { touched, error } }) => (
    <label>
      {label}
      <Field
        name={input.name}
        component="select"
        error={touched && error && true}
        success={touched && !error && true}
      >
        <option></option>
        <option value="male">M</option>
        <option value="female">Ж</option>
      </Field>
    </label>
)

const renderRadio = ({ input, label, meta: { touched, error } }) => (
    <label>
      <BlockChecked
        {...input}
        name={input.name}
        title={label}
        value={label}
        price="12 234 ₽"
        errorText={touched && error && error}
        error={touched && error && true}
        success={touched && !error && true}
      />
    </label>
)

const renderPassengers = ({ memberAll, fields, meta: { touched, error, submitFailed } }) => (
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
        { memberAll && memberAll[index] && Object.keys(memberAll[index]).length === 0 && <div>
            <Field name={`${member}.age`} component={renderRadio} label="adult"/>

            <Field name={`${member}.age`} component={renderRadio} label="children" />

            <Field name={`${member}.age`} component={renderRadio} label="infant" />
          </div>
        }
        { memberAll && memberAll[index] && Object.keys(memberAll[index]).length !== 0 && <div>
            <h4>{memberAll[index].age}</h4>
            <Field name={`${member}.firstName`} type="text" component={renderInput} label="Фамилия"/>
            <Field name={`${member}.lastName`} type="text" component={renderInput} label="Имя"/>
            <Field name={`${member}.gender`} component={renderGender} label="Пол"></Field>
            <Field name={`${member}.birthday`} type="date" component={renderInput} label="Возраст"></Field>
          </div>
        }
      </li>
    )}
  </ul>
)

class Forms extends Component {
  render() {
    return (
      <div>
        <form>
          <Field name="firstName" type="text" component={renderInput} label="Фамилия"/>
          <Field name="lastName" type="text" component={renderInput} label="Имя"/>
          <Field name="gender" component={renderGender} label="Пол"></Field>
          <Field name="birthday" type="date" component={renderInput} label="Возраст"></Field>
          <FieldArray name="member" component={renderPassengers} memberAll={this.props.memberAll}/>
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

const selector = formValueSelector('passengers')

const mapStateToProps = (state) => {
  const memberAll = selector(state, 'member')

  return {
     memberAll
  }
}

export default connect(mapStateToProps)(reduxForms);