import { TEST_IN } from '../actions/types';

const INITIAL_STATE = {};

const testReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TEST_IN:
			return { ...state, test: action.payload };

		default:
			return { ...state };
	}
};

export default testReducer;
