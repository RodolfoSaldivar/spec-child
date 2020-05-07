const INITIAL_STATE = {
	specGreeting: 'hello from spec'
};

export default (state = INITIAL_STATE, action = {}) => {
	if (action.type === 'UPDATE_GREETING') {
		return { ...state, specGreeting: action.payload };
	}

	return state;
};
