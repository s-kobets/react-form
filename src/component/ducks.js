export const initialState = {
    counter: {
        total: 0,
        parent: 0,
        children: 0,
    },
    validate: {
        increment: true,
        decrement: false, 
    }
}

export function reducerCounter(state=initialState, action) {
  switch (action.type) {
    case 'Increment':
      return Object.assign({}, state, {counter: state.counter + action.amount});
    case 'Decrement':
      return Object.assign({}, state, {counter: state.counter - action.amount});
    default:
      return state;
  }
}

export function increment() {
    return {
        type: 'Increment',
        amount: 1
    }
}

export function decrement() {
    return {
        type: 'Decrement',
        amount: 1
    }
}

export const actions = {
    increment,
    decrement
}