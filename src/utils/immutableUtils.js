///
// Dependencies
///

import Immutable from 'immutable';


///
// Recipes
///

export const matches = (searchObj) => (
	item => (
		Immutable.fromJS(searchObj).reduce((memo, value, key) => (
			memo && Immutable.is(item.get(key), value)
		), true)
	)
);

export const not = (predicate) => (
	() => (
		! predicate.apply(this, arguments)
	)
);

export const keyIn = (...keys) => {
	var keySet = Immutable.Set(keys); 
	return (v, k) => (
		keySet.has(k)
	);
};


///
// Mixins
///

// TODO - Make this into an immutable mixin
export const init = (imm, keyPath, value) => {
	if(typeof imm.getIn(keyPath) !== 'undefined') {
		return imm;
	}
	return imm.setIn(keyPath, value);
};

