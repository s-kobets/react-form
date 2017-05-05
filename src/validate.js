export const validate = (values) => {
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
  if (!values.gender) {
    errors.gender = 'Required'
  }
  if (!values.birthday) {
    errors.birthday = 'Required'
  }
  if (values.member) {
    const membersArrayErrors = []
    values.member.forEach((member, memberIndex) => {
      const memberErrors = {}
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
      if (!member || !member.birthday) {
        memberErrors.birthday = 'Required'
        membersArrayErrors[memberIndex] = memberErrors
      }
    })
    if(membersArrayErrors.length) {
      errors.members = membersArrayErrors
    }
  }

  return errors
}