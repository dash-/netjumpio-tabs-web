///
// Dependencies
///

import { fromJS, is, Set } from 'immutable';


///
// Recipes
///

export const matches = (searchObj) => (
	item => (
		fromJS(searchObj).reduce((memo, value, key) => (
			memo && is(item.get(key), value)
		), true)
	)
);

export const not = (predicate) => (
	() => (
		! predicate.apply(this, arguments)
	)
);

export const keyIn = (...keys) => {
	var keySet = Set(keys); 
	return (v, k) => (
		keySet.has(k)
	);
};


///
// Mixins
// TODO - Make these into immutable mixins
///

export const init = (imm, keyPath, value) => {
	if(typeof imm.getIn(keyPath) !== 'undefined') {
		return imm;
	}
	return imm.setIn(keyPath, value);
};

