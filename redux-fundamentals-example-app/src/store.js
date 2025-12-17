import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducer.js';
import { thunk } from 'redux-thunk';
// import { delayedMessageMiddleware } from './exampleAddons/delayedMessageMiddleware.js';
// const middlewareEnhancer = applyMiddleware(delayedMessageMiddleware);
const thunkMiddleware = applyMiddleware(thunk);
const store = createStore(rootReducer, thunkMiddleware);
export default store;
