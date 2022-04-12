import { combineReducers } from 'redux';
import testReducer from './testReducer';
import taskReducer from './taskReducer';

export default combineReducers({
	testReducer,
	taskReducer,
});
