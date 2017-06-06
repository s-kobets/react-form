import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Input, Label } from '../ui/lib'
import Cleave from 'cleave.js/react'
import styled from 'styled-components'
require(`cleave.js/dist/addons/cleave-phone.ru`)
import {onSubmit} from './button'
import { validateUser as validate } from '../validate'
import { selectInitialValues } from '../select'

const WrapperInputTelephone = styled.div`
  position: relative;
  display: inline-block;
`

const Error = styled.span`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  display: flex;
  align-items: center;
  padding: 3px 10px 5px;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  border-radius: 3px;
  background-color: red;
  opacity: 0.97;
  z-index: 2;
`

const InputTelephone = styled(Cleave, Input)`
  position: relative;
  display: inline-block;
  padding-left: 9px;
  padding-right: 9px;
  height: 30px;
  width: 280px;
  color: #333;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #FFFFFF;
  cursor: text;
  transition-property: border-color, box-shadow;

  &::placeholder {
    color: #ccc;
  }

  &:hover {
    border-color: #38afff;
  }

  &:focus {
    box-shadow: 0 0 0 1px #38afff;
    border-color: #38afff;
    outline-style: none;
    z-index: 2;

    & + .input-line {
      display: none;
    }
  }
`
const InputLine = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 2px;
  border-radius: 3px 0 0 3px;
  background-color: ${(props) => (props.error ? 'red' : 'green')};
`

const renderCleave = (props) => {
  const { input, label, type, meta: { touched, error, initial } } = props
  const bugaga = (event) => {
  }

  return (
    <Label title={label}>
      <WrapperInputTelephone>
        <InputTelephone
          {...input}
          options={{phone: true, phoneRegionCode: 'RU'}}
          errorText={touched && error && error}
          error={touched && error && true}
          onChange={bugaga}
        />
        {
          ((touched && (error || input.value.length > 0)) || (initial && initial.length > 0)) && <InputLine
            error={touched && error}
            success={touched && input.value.length > 0}
            className="input-line"
          />
        }
        {
          touched && error && <Error>{error}</Error>
        }
      </WrapperInputTelephone>
    </Label>
  )
}

const renderInput = (props) => {
  const { input, label, type, meta: { touched, error, initial } } = props

  return (
    <Label title={label}>
      <Input
        {...input}
        type={type}
        placeholder={label}
        errorText={touched && error && error}
        error={touched && error && true}
        success={(touched && input.value.length > 0) || (initial && initial.length > 0)}
        size="small"
      />
    </Label>
  )
}

class Forms extends Component {
  render() {
    const {handleSubmit} = this.props

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field name="email" type="email" component={renderInput} label="Электронная почта" />
          <Field name="phone" component={renderCleave} label="Телефон" />
        </form>
      </div>
    )
  }
}

// Decorate the form component
const reduxForms = reduxForm({
  form: 'user',
  validate,
  onSubmit,
})(Forms);

const mapStateToProps = (state) => {
  const initialValues = selectInitialValues
  return {
    initialValues,
  }
}

export default connect(mapStateToProps)(reduxForms);