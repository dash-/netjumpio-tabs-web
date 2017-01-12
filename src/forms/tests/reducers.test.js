import { fromJS } from 'immutable';
import reducer from '../reducers';
import * as actions from '../actions';

const defaultForm = fromJS({
	isVisible: false,
	allowClear: true,
	allowHide: true,
	dataHasInitialized: false,
	uploads: {},
	values: {},
	aux: {},
});

it('forms: correctly reduces invalid action', () => {
	const reduction = reducer(
		fromJS({}), {type: null},
	).toJS();

	const correctReduction = {};

	expect(reduction).toEqual(correctReduction);
});

it('forms: correctly reduces FORMS:INIT_FORM action', () => {
	const reduction = reducer(
		fromJS({}), actions.initForm('i', {})
	).toJS();

	const correctReduction = {
		i: defaultForm.toJS(),
	};

	expect(reduction).toEqual(correctReduction);
});

it('forms: correctly reduces FORMS:INIT_FORM_DATA action', () => {
	const reduction = reducer(
		fromJS({}), actions.initFormData('i', {
			values: { i: 1, j: 2 },
			aux: { k: 3, l: 4 },
		})
	).toJS();

	const correctReduction = {
		i: defaultForm.set('values', fromJS({
			i: 1, j: 2
		})).set('aux', fromJS({
			k: 3, l: 4
		})).set('dataHasInitialized', true).toJS()
	};

	expect(reduction).toEqual(correctReduction);
});


it('forms: correctly reduces FORMS:CLEAR_FORM action', () => {
	const reduction = reducer(fromJS({
		i: defaultForm.set('values', fromJS({
			i: 1, j: 2
		})).set('aux', fromJS({
			k: 3, l: 4
		})).toJS()
	}), actions.clearForm('i')).toJS();

	const correctReduction = {
		i: defaultForm.toJS(),
	};

	expect(reduction).toEqual(correctReduction);
});

it('forms: correctly reduces FORMS:CLEAR_FORM_VALUES action', () => {
	const reduction = reducer(fromJS({
		i: defaultForm.set('values', fromJS({
			i: 1, j: 2
		})).toJS()
	}), actions.clearFormValues('i')).toJS();

	const correctReduction = {
		i: defaultForm.toJS(),
	};

	expect(reduction).toEqual(correctReduction);
});

it('forms: correctly reduces FORMS:SHOW_FORM action', () => {
	const reduction = reducer(fromJS({
		i: defaultForm.toJS(),
	}), actions.showForm('i')).toJS();

	const correctReduction = {
		i: defaultForm.set('isVisible', true).toJS()
	};

	expect(reduction).toEqual(correctReduction);
});

it('forms: correctly reduces FORMS:HIDE_FORM action', () => {
	const reduction = reducer(fromJS({
		i: defaultForm.set('isVisible', true).toJS()
	}), actions.hideForm('i')).toJS();

	const correctReduction = {
		i: defaultForm.toJS()
	};

	expect(reduction).toEqual(correctReduction);
});

it('forms: correctly reduces FORMS:FIELD_CHANGED action', () => {
	const reduction = reducer(fromJS({
		i: defaultForm.toJS(),
	}), actions.fieldChanged('i', 'j', 1)).toJS();

	const correctReduction = {
		i: defaultForm.set('values', fromJS({
			j: 1
		})).toJS()
	};

	expect(reduction).toEqual(correctReduction);
});

it('forms: correctly reduces FORMS:AUX_FIELD_CHANGED action', () => {
	const reduction = reducer(fromJS({
		i: defaultForm.toJS(),
	}), actions.auxFieldChanged('i', 'j', 1)).toJS();

	const correctReduction = {
		i: defaultForm.set('aux', fromJS({
			j: 1
		})).toJS()
	};

	expect(reduction).toEqual(correctReduction);
});

it('forms: correctly reduces FORMS:UPLOAD_IMAGE_START action', () => {
	const reduction = reducer(fromJS({
		i: defaultForm.toJS(),
	}), actions.uploadImageStart('i', 'j', 'k')).toJS();

	const correctReduction = {
		i: defaultForm.set('uploads', fromJS({
			j: {isUploading: true}
		})).toJS()
	};

	expect(reduction).toEqual(correctReduction);
});

it('forms: correctly reduces FORMS:UPLOAD_IMAGE_DONE action', () => {
	const reduction = reducer(fromJS({
		i: defaultForm.set('uploads', fromJS({
			j: {isUploading: true}
		})).toJS()
	}), actions.uploadImageDone('i', 'j', 'k')).toJS();

	const correctReduction = {
		i: defaultForm.set('values', fromJS({
			j: 'k',
		})).toJS()
	};

	expect(reduction).toEqual(correctReduction);
});

