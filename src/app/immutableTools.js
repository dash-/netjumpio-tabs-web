///
// Dependencies
///

import Immutable from 'immutable';


///
// Methods
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
