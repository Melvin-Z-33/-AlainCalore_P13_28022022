import loginReducer from './reducers/loginReducer';
import userReducer from './reducers/userReducer';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({ loginReducer, userReducer });
const store = createStore(rootReducer);

export default store;
