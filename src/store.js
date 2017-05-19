import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer, actionTypes } from 'redux-form'

function parent(state={}, action) {
    return state;
}

const rootReducer = combineReducers({
  form: formReducer.plugin({
    passengers: (state, action) => {
      switch(action.type) {
        case actionTypes.ARRAY_PUSH:
          const member = state.values.member
          let infant = state.values.infant || 0
          let adult = state.values.adult || 1
          let children = state.values.children || 0

          member.forEach((passenger) => {
            if (passenger.age === "infant") infant += 1
            if (passenger.age === "adult") adult += 1
            if (passenger.age === "children") children += 1
          })
          const total = infant + adult + children

          return {...state, values: {...state.values, total, adult, children, infant}}
        case actionTypes.ARRAY_REMOVE:
          infant = state.values.infant
          adult = state.values.adult
          children = state.values.children

          state.values.member.forEach((passenger) => {
            if (passenger.age === "infant") infant -= 1
            if (passenger.age === "adult") adult -= 1
            if (passenger.age === "children") children -= 1
          })
          total = infant + adult + children
          return {...state, values: {...state.values, total, adult, children, infant}}

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