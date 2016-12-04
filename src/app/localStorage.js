///
// Dependencies
///

import Immutable from 'immutable';
import throttle from 'lodash/throttle';


///
// Methods
///

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if(serializedState === null) {
			return undefined;
		}
		return Immutable.fromJS(JSON.parse(serializedState));

	} catch(err) {
		return undefined;
	}
};

export const saveState = throttle((state) => {
	try {
		const serializedState = JSON.stringify(state.toJS());
		localStorage.setItem('state', serializedState);
	} catch(err) {
		console.error(err);
	}
}, 1000);
