import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer, actionTypes } from 'redux-form'
import translitEngine from 'translitit-engine'
import translitLatin from './translitLatin'
import validator from 'validator'
const transliterate = translitEngine(translitLatin)

function countCounter(member) {
  let infant = 0
  let adult = 1
  let children = 0

  member.forEach((passenger) => {
    if (passenger.age === "infant") infant += 1
    if (passenger.age === "adult") adult += 1
    if (passenger.age === "children") children += 1
  })
  const total = infant + adult + children
  return {infant, adult, children, total}
}

function translitInput(value) {
  if (value && !validator.isAlpha(value)) {
    return transliterate(value)
  } else {
    return value
  }
}

const rootReducer = combineReducers({
  form: formReducer.plugin({
    passengers: (state, action) => {
      switch(action.type) {
        case actionTypes.BLUR:
          let firstName = translitInput(state.values.firstName)
          let lastName = translitInput(state.values.lastName)

          const memberTranslate = state.values.member && state.values.member.map((member) => {
            let firstNameMember = translitInput(member.firstName)
            let lastNameMember = translitInput(member.lastName)

            return {
              ...member,
              firstName: firstNameMember,
              lastName: lastNameMember
            }
          })
          
          return {...state, values:{...state.values, firstName, member: memberTranslate}}
        case actionTypes.CHANGE:
          const day = (state.values && state.values['birthday-day']) || ''
          const month = (state.values && state.values['birthday-month']) || ''
          const year = (state.values && state.values['birthday-year']) || ''
          const birthday = `${year}-${month}-${day}`

          const memberNew = state.values.member && state.values.member.map((member) => {
            const dayMember = member['birthday-day'] || ''
            const monthMember = member['birthday-month'] || ''
            const yearMember = member['birthday-year'] || ''
            const birthdayMember = `${yearMember}-${monthMember}-${dayMember}`
            return {
              ...member,
              birthday: birthdayMember,
            }
          })
          return {...state, values: {...state.values, birthday, member: memberNew}}
        case actionTypes.ARRAY_PUSH:
          const member = state.values.member
          const counter = countCounter(member)
          // fix total when add last passengers
          if (counter.total === 8) {
            counter.total += 1
          }
          return {...state, values: {...state.values, counter: {...state.values.counter, ...counter }}}

        case actionTypes.ARRAY_REMOVE:
          const memberAll = state.values.member
          const counterAll = countCounter(memberAll)

          return {...state, values: {...state.values, counter: {...state.values.counter, ...counterAll }}}

        default:
          return state
      }
    }
  })
});

const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => {
  store.getState();
});

export default store