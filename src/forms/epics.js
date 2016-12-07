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
				store.getState().getIn(['forms', action.payload, 'values']).toJS(),
				store.getState().getIn(['forms', action.payload, 'aux']).toJS(),
			)
		)))
);

const submitFormDone = (action$, store) => (
	action$.ofType(actions.FORM_SUBMIT_DONE)
		.debounceTime(50)
		.switchMap(action => (Observable.of(
			actions.hideForm(action.payload.formName)
		)))
);


///
// Exports
///

export default combineEpics(
	submitForm, submitFormDone
);

