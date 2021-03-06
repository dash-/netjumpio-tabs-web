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

const submitLoginForm = (action$, store) => (
	action$.ofType(actions.SUBMIT_LOGIN_FORM)
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
				Observable.of(formsActions.submitFormDone('login', payload)),
				Observable.of(actions.loginDone(payload))
			)).catch(error => (
				Observable.of(actions.loginFail(error, action))
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
			).map(payload => (
				actions.logoutDone(payload)
			)).catch(error => (
				Observable.of(actions.logoutFail(error, action))
			))
		))
);


///
// Exports
///

export default combineEpics(
	submitLoginForm, login, logout
);

export {
	submitLoginForm, login, logout
};

