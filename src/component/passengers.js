import React, { Component } from 'react'
import Select, { Option, OptGroup } from 'rc-select'
import 'rc-select/assets/index.css'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form'
import { validatePassenger as validate } from '../validate'
import { Input, BlockChecked, ControlsGroup, Label, ThemeProvider } from '../ui/lib'
import { selectInitialValues } from '../select'
import {onSubmit} from './button'
import {renderCleave, renderInputEmail} from './user'

function renderInput(props) {
  const { input, label, meta: { touched, error } } = props

  return (
    <Label title={label}>
      <Input
        {...props}
        {...input}
        placeholder={label}
        error={touched && error && error}
        success={!error && input.value.length > 0}
        size="small"
      />
    </Label>
  )
}

const onlyNumberTwo = (value) => {
  if (value !== undefined) {
    const number = value.replace(/[^\d]/g, '')
    return number.slice(0,2)
  }
}

const onlyNumberFour = (value) => {
  if (value !== undefined) {
    const number = value.replace(/[^\d]/g, '')
    return number.slice(0,4)
  }
}

const InputDate = styled(Input)`
  width: 42px;
`

const InputDateYear = styled(Input)`
  width: 54px;
`

function wrapperDate(props) {
  const { input, label, type, meta: { touched, error } } = props
  const value = input.value.replace(/(^|\s)0/g, '$1')

  return (
    <InputDate
      {...props}
      {...input}
      placeholder="ДД"
      error={touched && error && error}
      success={!error && input.value.length > 0}
      size="small"
    />
  )
}

function monthYearDate(props) {
  const { input, label, meta: { touched, error } } = props

  if (input.name === 'birthday-month') {
    return (
      <InputDate
        {...props}
        {...input}
        placeholder="MM"
        size="small"
      />
    )
  } else {
    return (
      <InputDateYear
        {...props}
        {...input}
        placeholder="ГГГГ"
        size="small"
      />
    )
  }
}

const SelectStyled = styled(Select)`
  border: none;
`

const InputLine = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 2px;
  border-radius: 3px 0 0 3px;
  background-color: ${({ success }) => (success ? 'green' : 'red')} 
`
function renderSelect({ children, input, label, type, meta: { touched, error } }) {
  // props from select
  const RenderGetInput = (props) => {
    console.log(12314142, props)
    //  isDropdown={false} 

    return (
      <Input
        {...props}
        error={touched && error && error}
        success={!error}
        className="has-badge"
        type="text"
        name="input"
        size="small"
        placeholder="Гражданство"
        positioDropdown="right"
      />
    )
  }

  const CustomSelect = (props) => {
    const {children} = props
    // props.onFocus открывает и тутже закрывает (баг)
    return (
      <div style={{position: 'relative', display: 'inline-block'}}>
        <SelectStyled
          {...input}
          value={input.value || 'RU'}
          onFocus={() => false}
          onBlur={(value) => input.onBlur(value)}
          onChange={(value) => input.onChange(value)}
          defaultValue="Россия"
          placeholder="placeholder"
          getInputElement={() => <RenderGetInput />}
          showArrow={false}
          notFoundContent=""
          filterOption={false}
          defaultActiveFirstOption={false}
          combobox
        >
          {children}
        </SelectStyled>
      </div>
    )
  }

  return (
    <CustomSelect>
      <OptGroup label="СНГ">
        <Option value="RU" desc="Россия">Россия</Option>
        <Option value="RB" desc="Беларусь">Беларусь</Option>
        <Option value="UA" desc="Украина">Украина</Option>
      </OptGroup>
      <OptGroup label="Азия">
        <Option value="CH" desc="Китай">Китай</Option>
      </OptGroup>
    </CustomSelect>
  )
}

const renderGender = ({ input, label, type, meta: { touched, error } }) => (
    <Label title={label}>
      <Field
        name={input.name}
        component="select"
        error={touched && error && error}
        success={touched && !error && true}
      >
        <option></option>
        <option value="male">M</option>
        <option value="female">Ж</option>
      </Field>
    </Label>
)

const renderRadio = ({ input, label, title, price, index, meta: { touched, error } }) => (
    <BlockChecked
      {...input}
      htmlFor={`${label}[${index}]`}
      name={input.name}
      title={title}
      value={label}
      price={price}
      error={touched && error && error}
      success={touched && !error && true}
    />
)

const renderPassengers = (props) => {
  const { price, counter, memberAll, fields, meta: { touched, error, submitFailed }} = props

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
              price={price.adult}
              index={index}
            />

            <Field
              name={`${member}.age`}
              component={renderRadio}
              label="children"
              title="Ребенок"
              price={price.children}
              index={index}
            />
            { ((counter && counter.infant < counter.adult) || counter === undefined) && <Field
                name={`${member}.age`}
                component={renderRadio}
                label="infant"
                title="Младенец"
                price={price.infant}
                index={index}
              />
            }
          </div>
        }
        { memberAll && memberAll[index] && Object.keys(memberAll[index]).length !== 0 && <div>
            <h4>{memberAll[index].age} {price[memberAll[index].age]}</h4>
            <Field name={`${member}.firstName`} type="text" component={renderInput} label="Фамилия"/>
            <Field name={`${member}.lastName`} type="text" component={renderInput} label="Имя"/>
            <Field name={`${member}.gender`} component={renderGender} label="Пол"></Field>
            <Label title="Дата рождения">
              <ControlsGroup>
                  <Field name={`${member}.birthday-day`} type="number" component={wrapperDate} normalize={onlyNumberTwo}></Field>
                  <Field name={`${member}.birthday-month`} type="number" component={monthYearDate} normalize={onlyNumberTwo}></Field>
                  <Field name={`${member}.birthday-year`} type="number" component={monthYearDate} normalize={onlyNumberFour}></Field>
              </ControlsGroup>
            </Label>
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
  const {handleSubmit} = props

  return (
    <ThemeProvider>
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="email" type="email" component={renderInputEmail} label="Электронная почта" />
          <Field name="phone" component={renderCleave} label="Телефон" />
        </div>

        <Field name="citizenship" type="text" component={renderSelect} label="Гражданство"/>
        <Field name="firstName" type="text" component={renderInput} label="Фамилия"/>
        <Field name="lastName" type="text" component={renderInput} label="Имя"/>
        <Field name="gender" component={renderGender} label="Пол"></Field>

        <Label title="Дата рождения">
          <ControlsGroup>
            <Field name="birthday-day" type="number" component={wrapperDate} normalize={onlyNumberTwo} label="Дата рождения"></Field>
            <Field name="birthday-month" type="number" component={monthYearDate} normalize={onlyNumberTwo}></Field>
            <Field name="birthday-year" type="number" component={monthYearDate} normalize={onlyNumberFour}></Field>
          </ControlsGroup>
        </Label>

        <FieldArray
          name="member"
          component={renderPassengers}
          memberAll={props.memberAll}
          counter={props.counter}
          price={props.price}
        />

      </form>
    </ThemeProvider>
  )
}

// Decorate the form component
const reduxForms = reduxForm({
  form: 'passengers',
  validate,
  onSubmit,
})(Forms);

const selector = formValueSelector('passengers')

const mapStateToProps = (state) => {
  const memberAll = selector(state, 'member')
  const counter = selector(state, 'counter')
  const initialValues = selectInitialValues
  const price = {
    adult: '3450 ₽',
    children: '3150 ₽',
    infant: 'Бесплатно',
  }

  return {
     initialValues,
     memberAll,
     counter,
     price
  }
}

export default connect(mapStateToProps)(reduxForms);