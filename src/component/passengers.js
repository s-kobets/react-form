import React, { Component } from 'react'
import Select, { Option, OptGroup } from 'rc-select'
import 'rc-select/assets/index.css'
import { connect } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form'
import { validatePassenger as validate } from '../validate'
import { Input, BlockChecked, ControlsGroup } from '../ui/lib'
import { selectInitialValues } from '../select'

const onlyNumberTwo = (value) => {
  const number = value.replace(/[^\d]/g, '')
  return number.slice(0,2)
}

const onlyNumberFour = (value) => {
  const number = value.replace(/[^\d]/g, '')
  return number.slice(0,4)
}

const InputDate = styled(Input)`
  width: 42px;
`

const InputDateYear = styled(Input)`
  width: 54px;
`

function wrapperDate(props) {
  const { input, label, type, meta: { touched, error } } = props

  return (
    <label>
      {label}
      <InputDate
        {...props}
        {...input}
        type={type}
        placeholder="ДД"
        errorText={touched && error && error}
        error={touched && error && true}
        success={touched && !error && true}
        size="small"
      />
    </label>
  )
}

function monthYearDate(props) {
  const { input, label, type, meta: { touched, error } } = props

  if (input.name === 'birthday-month') {
    return (
      <InputDate
        {...props}
        {...input}
        type={type}
        placeholder="MM"
        size="small"
      />
    )
  } else {
    return (
      <InputDateYear
        {...props}
        {...input}
        type={type}
        placeholder="ГГГГ"
        size="small"
      />
    )
  }
}

function renderSelect({ input, label, type, meta: { touched, error } }) {

  const customSelect = ({children, input, input: {value, onChange, onFocus, onBlur}}) => (
    <Select
      {...input}
      value={value || 'RU'}
      onFocus={() => false}
      onBlur={(value) => onBlur(value)}
      onChange={(value) => onChange(value)}
      defaultValue="Россия"
      style={{ width: 100 }}
      placeholder="placeholder"
      optionFilterProp="desc"
    >
      {children}
    </Select>
  )

  return (
    <Field
      name={input.name}
      component={customSelect}
      error={touched && error && true}
      success={touched && !error && true}
    >
      <OptGroup label="СНГ">
        <Option value="RU" desc="Россия">Россия</Option>
        <Option value="RB" desc="Беларусь">Беларусь</Option>
        <Option value="UA" desc="Украина">Украина</Option>
      </OptGroup>
      <OptGroup label="Азия">
        <Option value="CH" desc="Китай">Китай</Option>
      </OptGroup>
    </Field>
  )
}

function renderInput({ input, label, type, meta: { touched, error } }) {
  return (
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
}

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

const renderPassengers = (props) => {
  const { counter, memberAll, fields, meta: { touched, error, submitFailed }} = props

  function addPassenger() {
    fields.push({})
  }

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
            { ((counter && counter.infant < counter.adult) || counter === undefined) && <Field
                name={`${member}.age`}
                component={renderRadio}
                label="infant"
                title="Младенец"
                price="Бесплатно"
                index={index}
              />
            }
          </div>
        }
        { memberAll && memberAll[index] && Object.keys(memberAll[index]).length !== 0 && <div>
            <h4>{memberAll[index].age}</h4>
            <Field name={`${member}.firstName`} type="text" component={renderInput} label="Фамилия"/>
            <Field name={`${member}.lastName`} type="text" component={renderInput} label="Имя"/>
            <Field name={`${member}.gender`} component={renderGender} label="Пол"></Field>
            <ControlsGroup>
              <Field name={`${member}.birthday-day`} type="number" component={wrapperDate} normalize={onlyNumberTwo} label="Дата рождения"></Field>
              <Field name={`${member}.birthday-month`} type="number" component={monthYearDate} normalize={onlyNumberTwo}></Field>
              <Field name={`${member}.birthday-year`} type="number" component={monthYearDate} normalize={onlyNumberFour}></Field>
            </ControlsGroup>
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

// props to redux-form
function Forms(props) {
  return (
    <div>
      <form>
        <Field name="citizenship" type="text" component={renderSelect} label="Гражданство"/>
        <Field name="firstName" type="text" component={renderInput} label="Фамилия"/>
        <Field name="lastName" type="text" component={renderInput} label="Имя"/>
        <Field name="gender" component={renderGender} label="Пол"></Field>

        <ControlsGroup>
          <Field name="birthday-day" type="number" component={wrapperDate} normalize={onlyNumberTwo} label="Дата рождения"></Field>
          <Field name="birthday-month" type="number" component={monthYearDate} normalize={onlyNumberTwo}></Field>
          <Field name="birthday-year" type="number" component={monthYearDate} normalize={onlyNumberFour}></Field>
        </ControlsGroup>

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
  const initialValues = selectInitialValues

  return {
     initialValues,
     memberAll,
     counter
  }
}

export default connect(mapStateToProps)(reduxForms);