import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer, actionTypes } from 'redux-form'

function parent(state={}, action) {
    return state;
}

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

const rootReducer = combineReducers({
  form: formReducer.plugin({
    passengers: (state, action) => {
      switch(action.type) {
        case actionTypes.CHANGE:
          const day = state.values['birthday-day'] || ''
          const month = state.values['birthday-month'] || ''
          const year = state.values['birthday-year'] || ''

          const birthday = `${year}-${month}-${day}`
          return {...state, values: {...state.values, birthday}}
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
  }),
  parent,
});

const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => {
  store.getState();
});

export default store