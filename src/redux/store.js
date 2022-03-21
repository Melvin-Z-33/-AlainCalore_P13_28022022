import userReducer from './reducers/userReducer';
import { useSelector, useDispatch } from 'react-redux';

import { createStore, combineReducers } from 'redux';

//const rootReducer = combineReducers({ userReducer });
const store = createStore(
	userReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
