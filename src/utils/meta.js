///
// Dependencies
///

import { fromJS } from 'immutable';
import isArray from 'lodash/isArray';
import isUndefined from 'lodash/isUndefined';
import first from 'lodash/first';
import tail from 'lodash/tail';


///
// Constants
///

const ARRAY_INDICATOR = [];


///
// Functions
///

const isArrayIndicator = item => (
	isArray(item) && item.length < 1
);

const addMeta = (state, pathDescriptor, keyPath=[]) => {
	if(! isArray(pathDescriptor)) {
		throw new Error('pathDescriptor must be an array');
	}

	if(isUndefined(state)) {
		return state;
	}

	if(pathDescriptor.length < 1) {
		return state.set('_meta', fromJS({keyPath: keyPath}));
	}

	const key = first(pathDescriptor);

	if(isArrayIndicator(key)) {
		return state.map((item, itemKey) => (
			addMeta(
				item,
				tail(pathDescriptor),
				keyPath.concat([itemKey])
			)
		));
	}

	return state.update(key, item => (
		addMeta(
			item,
			tail(pathDescriptor),
			keyPath.concat([key])
		)
	));
};


///
// Exports
///

export default addMeta;
export { ARRAY_INDICATOR };

