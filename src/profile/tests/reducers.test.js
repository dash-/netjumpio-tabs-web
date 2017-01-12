import { fromJS } from 'immutable';
import reducer from '../reducers';
import * as actions from '../actions';

it('profile: correctly reduces invalid action', () => {
	const reduction = reducer(
		fromJS({}), {type: null},
	).toJS();

	const correctReduction = {};

	expect(reduction).toEqual(correctReduction);
});

it('profile: correctly reduces PROFILE:SHOW_PANEL action', () => {
	const reduction = reducer(
		undefined, actions.showPanel()
	).toJS();

	const correctReduction = {
		showPanel: true,
	};

	expect(reduction).toEqual(correctReduction);
});

it('profile: correctly reduces PROFILE:DISMISS_PANEL action', () => {
	const reduction = reducer(
		undefined, actions.dismissPanel()
	).toJS();

	const correctReduction = {
		showPanel: false,
	};

	expect(reduction).toEqual(correctReduction);
});

