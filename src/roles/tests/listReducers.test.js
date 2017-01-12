import { fromJS } from 'immutable';
import reducer from '../listReducers';
import * as actions from '../actions';
import { keyIn } from '../../utils/immutableUtils.js';

const defaultItem = fromJS({
	logoUrl: 'a',
	name: 'b',
	id: 'c',
	ownerGroupId: 'd',
	deletedAt: null,
	isDeleted: false,
	tabsets: [],
	group: {},
});

const defaultItemWithMeta = defaultItem.set('_meta', fromJS({
	keyPath: ['roles', 0]
}));

const defaultGroup = fromJS({
	logoUrl: 'ga',
	name: 'gb',
	url: 'gc',
	id: 'gd',
	deletedAt: null,
	isDeleted: false,
});

it('roles: correctly reduces invalid action', () => {
	const reduction = reducer(
		fromJS({}), {type: null},
	).toJS();

	const correctReduction = {};

	expect(reduction).toEqual(correctReduction);
});

it('roles: correctly reduces ROLES:GET_LIST_DONE action', () => {
	const reduction = reducer(fromJS({
		roles: [],
		groups: [],
	}), actions.getListDone([
		defaultItem.toJS(),
		defaultItem.set('group', defaultGroup).toJS(),
	])).toJS();

	const correctReduction = {
		groups: [
			defaultGroup.filter(
				keyIn('id', 'name')
			).set('roles', fromJS([
				defaultItem.filter(
					keyIn('id', 'logoUrl', 'name')
				).set('_meta', fromJS({
					keyPath: ['groups', 0, 'roles', 0]
				})).toJS()
			])).toJS(),
		],
		roles: [
			defaultItemWithMeta.filter(
				keyIn('id', 'logoUrl', 'name', '_meta')
			).toJS(),
		],
	};

	expect(reduction).toEqual(correctReduction);
});

it('roles: correctly reduces ROLES:ADD_ITEM_DONE action', () => {
	const reduction = reducer(fromJS({
		groups: [],
		roles: [],
	}), actions.addItemDone(defaultItem.toJS())).toJS();

	const correctReduction = {
		groups: [],
		roles: [
			defaultItemWithMeta.toJS()
		]
	};

	expect(reduction).toEqual(correctReduction);
});

it('roles: correctly reduces ROLES:EDIT_ITEM_DONE action', () => {
	const reduction = reducer(fromJS({
		groups: [],
		roles: [
			defaultItemWithMeta.toJS()
		],
	}), actions.editItemDone(
		defaultItemWithMeta.set('name', 'i').toJS()
	)).toJS();

	const correctReduction = {
		groups: [],
		roles: [
			defaultItemWithMeta.set('name', 'i').toJS()
		]
	};

	expect(reduction).toEqual(correctReduction);
});

it('roles: correctly reduces ROLES:REMOVE_ITEM_DONE action', () => {
	const reduction = reducer(fromJS({
		groups: [],
		roles: [
			defaultItemWithMeta.toJS()
		],
	}), actions.removeItemDone(defaultItemWithMeta.toJS())).toJS();

	const correctReduction = {
		groups: [],
		roles: [],
	};

	expect(reduction).toEqual(correctReduction);
});

it('roles: correctly reduces ROLES:RESTORE_ITEM_DONE action', () => {
	const reduction = reducer(fromJS({
		groups: [],
		roles: [],
	}), actions.restoreItemDone(
		defaultItemWithMeta.toJS()
	)).toJS();

	const correctReduction = {
		groups: [],
		roles: [defaultItemWithMeta.toJS()]
	};

	expect(reduction).toEqual(correctReduction);
});

