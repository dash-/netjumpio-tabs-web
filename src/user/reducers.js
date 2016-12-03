///
// Dependencies
///

import Immutable from 'immutable';

import * as formActions from '../forms/actions';


///
// Reducers
///

function root(state = Immutable.fromJS({}), action) {
	const handlers = {
		[formActions.FORM_SUBMIT_FULFILLED]: onFormSubmitFulfilled, 
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}

export default root;


///
// Delegates
///

function onFormSubmitFulfilled(state, action) {
	if(action.payload.formName !== 'login') return state;

	const login = action.payload.resData;
	const user = login.user;

	return (state
		.set('accessToken', login.id)
		.set('loginTimestamp', new Date(login.created).getTime())
		.set('loginTTL', login.ttl)
		.set('id', user.id)
		.set('email', user.email)
		.set('logoUrl', user.logoUrl)
		.set('name', user.name)
		.set('username', user.username)
	);
}

