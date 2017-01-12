import { fromJS } from 'immutable';
import reducer, { actionsCount } from '../reducers';
import * as tabsetsActions from '../../tabsets/actions';
import * as peopleActions from '../../people/actions';
import * as groupsActions from '../../groups/actions';
import * as rolesActions from '../../roles/actions';

it('init: correctly reduces invalid action', () => {
	const reduction = reducer(
		fromJS({}), {type: null},
	).toJS();

	const correctReduction = {};

	expect(reduction).toEqual(correctReduction);
});

it('init: correctly reduces TABSETS:GET_LIST_DONE action', () => {
	const reduction = reducer(
		undefined, tabsetsActions.getListDone({})
	).toJS();

	const correctReduction = {
		progress: 1 / actionsCount,
	};

	expect(reduction).toEqual(correctReduction);
});

it('init: correctly reduces PEOPLE:GET_LIST_DONE action', () => {
	const reduction = reducer(
		undefined, peopleActions.getListDone({})
	).toJS();

	const correctReduction = {
		progress: 1 / actionsCount,
	};

	expect(reduction).toEqual(correctReduction);
});

it('init: correctly reduces GROUPS:GET_LIST_DONE action', () => {
	const reduction = reducer(
		undefined, groupsActions.getListDone({})
	).toJS();

	const correctReduction = {
		progress: 1 / actionsCount,
	};

	expect(reduction).toEqual(correctReduction);
});

it('init: correctly reduces ROLES:GET_LIST_DONE action', () => {
	const reduction = reducer(
		undefined, rolesActions.getListDone({})
	).toJS();

	const correctReduction = {
		progress: 1 / actionsCount,
	};

	expect(reduction).toEqual(correctReduction);
});

