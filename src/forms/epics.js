///
// Dependencies
///

import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import axios from 'axios';

import imageUploadConfig from '../app/imageUploadConfig';
import { toFormData } from '../utils/uploadUtils';

import * as actions from './actions';


///
// Epics
///

const submitForm = (action$, store) => (
	action$.ofType(actions.SUBMIT_FORM_START)
		.debounceTime(50)
		.switchMap(action => (
			Observable.of(actions.delegateSubmitForm(
				action.payload,
				store.getState().getIn(['forms', action.payload, 'values']).toJS(),
				store.getState().getIn(['forms', action.payload, 'aux']).toJS(),
			))
		))
);

const submitFormDone = (action$, store) => (
	action$.ofType(actions.SUBMIT_FORM_DONE)
		.debounceTime(50)
		.switchMap(action => (Observable.of(
			actions.hideForm(action.payload.formName)
		)))
);

const uploadImageStart = (action$, store) => (
	action$.ofType(actions.UPLOAD_IMAGE_START)
		.debounceTime(50)
		.switchMap(action => (
			Observable.fromPromise(
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
			)).catch(error => (
				Observable.of(actions.uploadImageFail(
					error,
					action,
				))
			))
		))
);




///
// Exports
///

export default combineEpics(
	submitForm, submitFormDone, uploadImageStart
);

