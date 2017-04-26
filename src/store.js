import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

function parent(state={}, action) {
    return state;
}

const rootReducer = combineReducers({
  form: formReducer,
  parent,
});

const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => {
  store.getState();
});

export default store