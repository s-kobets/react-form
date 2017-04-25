import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from 'redux';
import { reducerCounter } from './component/ducks'

function parent(state={}, action) {
    return state;
}

const rootReducer = combineReducers({
  parent,
  reducerCounter
});

const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => {
  store.getState();
});

export default store