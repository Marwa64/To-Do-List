import allReducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(allReducers, initialState, composedEnhancer);

export default store;
