import {
	SUBMIT_TASK,
	REMOVE_TODO,
	COMPLETED,
	REMOVE_COMPLETED,
} from '../actions/types';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = {
	tasks: [],
	completed: [],
};

const taskReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SUBMIT_TASK:
			let id = uuidv4();
			return {
				...state,
				tasks: [...state.tasks, { task: action.payload, id }],
			};
		case REMOVE_TODO:
			return {
				...state,
				tasks: state.tasks.filter(item => {
					return action.payload !== item.id;
				}),
			};
		case COMPLETED:
			return {
				...state,
				completed: [
					...state.completed,
					...action.payload.completedItem,
				],
				tasks: state.tasks.filter(item => {
					return action.payload.id !== item.id;
				}),
			};
		case REMOVE_COMPLETED:
			return {
				...state,
				completed: state.completed.filter(item => {
					return action.payload !== item.id;
				}),
			};
		default:
			return { ...state };
	}
};

export default taskReducer;
