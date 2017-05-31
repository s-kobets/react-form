import moment from 'moment'

export const validateUser = (values) => {
  let errors = {}
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

export const validatePassenger = (values) => {
  let errors = {}

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

  if (!values.gender) {
    errors.gender = 'Required'
  }

  if (!values['birthday-day'] || !values['birthday-month'] || !values['birthday-year']) {
    errors['birthday-day'] = 'Required'
  } else if (values.birthday && !moment(values.birthday).isValid()) {
    errors['birthday-day'] = 'Неверный формат даты'
  } else if (moment(values.birthday).diff(moment().format('YYYY-MM-DD'), 'month') >= -144) {
    errors['birthday-day'] = 'Взрослый должен быть не моложе 12 лет'
  }

  if (values.member) {
    let membersArrayErrors = []
    values.member.forEach((member, memberIndex) => {
      let memberErrors = {}

      if (!member.firstName) {
        memberErrors.firstName = 'Required'
        membersArrayErrors[memberIndex] = memberErrors
      } else if (!/[a-zA-Z]$/i.test(member.firstName)) {
        memberErrors.firstName = 'только латинские буквы'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.lastName) {
        memberErrors.lastName = 'Required'
        membersArrayErrors[memberIndex] = memberErrors
      } else if (!/[a-zA-Z]$/i.test(member.lastName)) {
        memberErrors.lastName = 'только латинские буквы'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.gender) {
        memberErrors.gender = 'Required'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member['birthday-day'] || !member['birthday-month'] || !member['birthday-year']) {
        memberErrors['birthday-day'] = 'Required'
        membersArrayErrors[memberIndex] = memberErrors
      } else if (!moment(`${member['birthday-year']}-${member['birthday-month']}-${member['birthday-day']}`).isValid()) {
        memberErrors['birthday-day'] = 'Неверный формат даты'
        membersArrayErrors[memberIndex] = memberErrors
      } else if (moment(`${member['birthday-year']}-${member['birthday-month']}-${member['birthday-day']}`).diff(moment().format('YYYY-MM-DD'), 'month') >= -144 && member.age === 'adult') {
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