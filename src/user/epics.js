///
// Dependencies
///

import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';

import api from '../app/api';
import * as actions from './actions';
import * as formsActions from '../forms/actions';


///
// Epics
///

const loginFormSubmit = (action$, store) => (
	action$.ofType(actions.LOGIN_FORM_SUBMIT)
		.switchMap(action => (
			Observable.of(actions.loginStart(action.payload))
		))
);

const login = (action$, store) => (
	action$.ofType(actions.LOGIN_START)
		.switchMap(action => (
			Observable.fromPromise(
				api.createUserClient('people').login({
					email: action.payload.email,
					password: action.payload.password,
				}, 'user')
			).flatMap(payload => Observable.concat(
				Observable.of(formsActions.formSubmitDone('login', payload)),
				Observable.of(actions.loginDone(payload))
			))
		))
);

const logout = (action$, store) => (
	action$.ofType(actions.LOGOUT_START)
		.switchMap(action => (
			Observable.fromPromise(
				api.createUserClient('people').logout(
					store.getState().getIn(['user', 'accessToken']),
				)
			).map(payload => actions.logoutDone(payload))
		))
);


///
// Exports
///

export default combineEpics(
	loginFormSubmit, login, logout
);

