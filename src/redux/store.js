import LoginReducer from './reducers/LoginReducer';
import UserReducer from './reducers/UserReducer';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({ LoginReducer, UserReducer });
const store = createStore(rootReducer);

export default store;
