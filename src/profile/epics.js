///
// Dependencies
///

import { combineEpics } from 'redux-observable';

import * as actions from './actions';


///
// Epics
///

const togglePanel = (action$, store) => (
	action$.ofType(actions.TOGGLE_PANEL)
		.debounceTime(50)
		.map(action => {
			const isShown = store.getState().getIn(
				['profile', 'showPanel']
			);

			if(isShown) {
				return actions.dismissPanel();
			}

			return actions.showPanel();
		})
);


///
// Exports
///

export default combineEpics(
	togglePanel
);

