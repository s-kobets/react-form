import moment from 'moment'
import validator from 'validator';

export const validateUser = (values) => {
  let errors = {}
  if (values.email && !validator.isEmail(values.email)) {
    errors.email = 'не верный email'
  } 

  if (values.phone && values.phone.replace(/[^\d]/g, '').length < 3){
    errors.phone = 'Номер телефона не меньше 3 символов'
  } 

  return errors
}

export const validatePassenger = (values) => {
  let errors = {}

  if (values.firstName && !validator.isAlpha(values.firstName)) {
    errors.firstName = 'только латинские буквы'
  }

  if (values.lastName && !validator.isAlpha(values.lastName)) {
    errors.lastName = 'только латинские буквы'
  }

  // т.к. в дата формата 2000-11-11
  if (values.birthday && values.birthday.length > 2 && !moment(values.birthday).isValid()) {
    errors['birthday-day'] = 'Неверный формат даты'
  } else if (values.birthday && values.birthday.length < 10 && values.birthday.length > 2) {
    errors['birthday-day'] = 'Не полная дата'
  } else if (values.birthday && moment(values.birthday).diff(moment().format('YYYY-MM-DD'), 'month') >= -144) {
    errors['birthday-day'] = 'Взрослый должен быть не моложе 12 лет'
  }

  if (values.member) {
    let membersArrayErrors = []
    values.member.forEach((member, memberIndex) => {
      let memberErrors = {}

      if (member.firstName && !validator.isAlpha(member.firstName)) {
        memberErrors.firstName = 'только латинские буквы'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (member.lastName && !validator.isAlpha(member.lastName)) {
        memberErrors.lastName = 'только латинские буквы'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (member.birthday && member.birthday.length > 2 && !moment(member.birthday).isValid()) {
        memberErrors['birthday-day'] = 'Неверный формат даты'
        membersArrayErrors[memberIndex] = memberErrors
      } else if (member.birthday && member.birthday.length < 10 && member.birthday.length > 2) {
        memberErrors['birthday-day'] = 'Не полная дата'
        membersArrayErrors[memberIndex] = memberErrors
      } else if (member.birthday && moment(member.birthday).diff(moment().format('YYYY-MM-DD'), 'month') >= -144) {
        memberErrors['birthday-day'] = 'Взрослый должен быть не моложе 12 лет'
        membersArrayErrors[memberIndex] = memberErrors
      }
    })
    if(membersArrayErrors.length) {
      // name component (member)
      errors.member = membersArrayErrors
    }
  }

  return errors
}