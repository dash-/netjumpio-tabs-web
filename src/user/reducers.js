///
// Dependencies
///

import Immutable from 'immutable';

import * as actions from './actions';


///
// Reducers
///

function root(state = Immutable.fromJS({}), action) {
	const handlers = {
		[actions.LOGIN_DONE]: loginDone, 
		[actions.LOGOUT_DONE]: logoutDone, 
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}

export default root;


///
// Delegates
///

function loginDone(state, action) {
	const login = action.payload;
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

function logoutDone(state, action) {
	return Immutable.fromJS({});
}

