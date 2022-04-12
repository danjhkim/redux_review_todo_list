import {
	TEST_IN,
	SUBMIT_TASK,
	REMOVE_TODO,
	COMPLETED,
	REMOVE_COMPLETED,
} from './types';

export const TEST_ACTION = () => {
	return {
		type: TEST_IN,
		payload: true,
	};
};

export const ADD_TASK = data => {
	return {
		type: SUBMIT_TASK,
		payload: data,
	};
};

export const REMOVE_TASK = id => {
	return {
		type: REMOVE_TODO,
		payload: id,
	};
};

export const MOVE_COMPLETED = id => async (dispatch, getState) => {
	const state = getState();
	console.log(state);

	const completedItem = state.taskReducer.tasks.filter(item => {
		return id === item.id;
	});
	console.log(completedItem);

	dispatch({
		type: COMPLETED,
		payload: { id, completedItem },
	});
};

export const REMOVE_TASK_COMPLETED = id => {
	return {
		type: REMOVE_COMPLETED,
		payload: id,
	};
};
