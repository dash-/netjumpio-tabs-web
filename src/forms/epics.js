///
// Dependencies
///

import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import * as actions from './actions';


///
// Epics
///

const submitForm = (action$, store) => (
	action$.ofType(actions.FORM_SUBMIT_START)
		.debounceTime(50)
		.switchMap(action => (Observable.of(
			actions.delegateFormSubmit(
				action.payload,
				store.getState().getIn(['forms', action.payload, 'values']).toJS()
			)
		)))
);

const submitFormFulfilled = (action$, store) => (
	action$.ofType(actions.FORM_SUBMIT_FULFILLED)
		.debounceTime(50)
		.switchMap(action => (Observable.of(
			actions.hideForm(action.payload.formName)
		)))
);


///
// Export
///

export default combineEpics(
	submitForm, submitFormFulfilled
);

