///
// Dependencies
///

import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import axios from 'axios';

import imageUploadConfig from '../app/imageUploadConfig';
import { toFormData } from '../lib/uploadUtils';

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

const uploadImageStart = (action$, store) => (
	action$.ofType(actions.FORM_IMAGE_UPLOAD_START)
		.debounceTime(50)
		.switchMap(action => {
			return Observable.fromPromise(
				axios.post(imageUploadConfig.url, toFormData({
					upload_preset: imageUploadConfig.preset,
					file: action.payload.image,
				}))
			).flatMap(payload => (
				Observable.of(actions.uploadImageDone(
					action.payload.form,
					action.payload.field,
					payload.data.secure_url
				))
			))
		})
);




///
// Exports
///

export default combineEpics(
	submitForm, submitFormDone, uploadImageStart
);

