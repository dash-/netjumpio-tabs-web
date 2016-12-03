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

const login = (action$, store) => (
	action$.ofType(actions.SUBMIT_LOGIN_FORM)
		.switchMap(action => (
			Observable.fromPromise(
				api.createUserClient('people').login({
					email: action.payload.email,
					password: action.payload.password,
				}, 'user')
			).map(payload => formsActions.formSubmitFulfilled('login', payload))
		))
);


///
// Export
///

export default combineEpics(
	login
);

