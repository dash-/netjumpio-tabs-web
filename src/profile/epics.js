///
// Dependencies
///

import { combineEpics } from 'redux-observable';

import * as actions from './actions';


///
// Epics
///

const togglePanel = (action$, store) => (
	action$.ofType(actions.PROFILE_PANEL_TOGGLE)
		.debounceTime(50)
		.map(action => {
			const isShown = store.getState().getIn(
				['profile', 'showPanel']
			);

			if(isShown) {
				return actions.dismissProfilePanel();
			}

			return actions.showProfilePanel();
		})
);


///
// Exports
///

export default combineEpics(
	togglePanel
);

