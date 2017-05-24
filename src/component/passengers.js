import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import { validatePassenger as validate } from '../validate'
import { Input, BlockChecked } from '../ui/lib'

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
      />
    </label>
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

const renderRadio = ({ input, label, title, price, index, meta: { touched, error } }) => (
    <BlockChecked
      {...input}
      htmlFor={`${label}[${index}]`}
      name={input.name}
      title={title}
      value={label}
      price={price}
      errorText={touched && error && error}
      error={touched && error && true}
      success={touched && !error && true}
    />
)

const renderPassengers = ({ counter, memberAll, fields, meta: { touched, error, submitFailed }}) => {
  function addPassenger() {
    fields.push({})
  }

  console.log(counter)
  return ( <ul>
    {fields.map((member, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}
        >x</button>
        { memberAll && memberAll[index] && Object.keys(memberAll[index]).length === 0 && <div>
            <Field
              name={`${member}.age`}
              component={renderRadio}
              label="adult"
              title="Взрослый"
              price="3450 ₽"
              index={index}
            />

            <Field
              name={`${member}.age`}
              component={renderRadio}
              label="children"
              title="Ребенок"
              price="3150 ₽"
              index={index}
            />

            <Field
              name={`${member}.age`}
              component={renderRadio}
              label="infant"
              title="Младенец"
              price="Бесплатно"
              index={index}
            />
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
    { ((counter && counter.total < 9) || counter === undefined) && <li>
        <button type="button" onClick={addPassenger}>+ Member</button>
        {(touched || submitFailed) && error && <span>{error}</span>}
      </li>
    }
  </ul>
  )
}

function Forms(props) {
  console.log(props)
  return (
    <div>
      <form>
        <Field name="firstName" type="text" component={renderInput} label="Фамилия"/>
        <Field name="lastName" type="text" component={renderInput} label="Имя"/>
        <Field name="gender" component={renderGender} label="Пол"></Field>
        <Field name="birthday" type="date" component={renderInput} label="Возраст"></Field>
        <FieldArray
          name="member"
          component={renderPassengers}
          memberAll={props.memberAll}
          counter={props.counter}
        />
      </form>
    </div>
  )
}

// Decorate the form component
const reduxForms = reduxForm({
  form: 'passengers',
  validate
})(Forms);

const selector = formValueSelector('passengers')

const mapStateToProps = (state) => {
  const memberAll = selector(state, 'member')
  const counter = selector(state, 'counter')

  return {
     memberAll,
     counter
  }
}

export default connect(mapStateToProps)(reduxForms);