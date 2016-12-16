///
// Dependencies
///

import Immutable from 'immutable';

import * as actions from './actions';
import * as formsActions from '../forms/actions';


///
// Reducers
///

function root(state = Immutable.fromJS({}), action) {
	const handlers = {
		[formsActions.FORM_SUBMIT_DONE]: onFormSubmitDone, 
		[actions.LOGOUT_DONE]: onLogoutDone, 
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}

export default root;


///
// Delegates
///

function onFormSubmitDone(state, action) {
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

function onLogoutDone(state, action) {
	return Immutable.fromJS({});
}

