import userReducer from './reducers/userReducer';
import { createStore } from 'redux';

//const rootReducer = combineReducers({ userReducer });
const store = createStore(
	userReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
