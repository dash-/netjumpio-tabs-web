import { fromJS } from 'immutable';
import reducer from '../listReducers';
import { keyIn } from '../../utils/immutableUtils';
import * as actions from '../actions';
import * as groupsActions from '../../groups/actions';
import * as rolesActions from '../../roles/actions';

const defaultItem = fromJS({
	name: 'a',
	logoUrl: 'b',
	id: 'd',
	ownerPersonId: 'e',
	deletedAt: null,
	isDeleted: false,
});

const defaultItemWithMeta = defaultItem.set('_meta', fromJS({
	keyPath: ['tabsets', 0]
}));

it('tabsets: correctly reduces invalid action', () => {
	const reduction = reducer(
		fromJS({}), {type: null},
	).toJS();

	const correctReduction = {};

	expect(reduction).toEqual(correctReduction);
});

it('tabsets: correctly reduces TABSETS:GET_LIST_DONE action', () => {
	const reduction = reducer(fromJS({
		tabsets: [],
		groups: [],
		roles: [],
	}), actions.getListDone([defaultItem.toJS()])).toJS();

	const correctReduction = {
		tabsets: [
			defaultItemWithMeta.toJS(),
		],
		groups: [],
		roles: [],
	};

	expect(reduction).toEqual(correctReduction);
});

it('tabsets: correctly reduces ROLES:GET_LIST_DONE action', () => {
	const defaultRole = fromJS({
		name: 'a',
		logoUrl: 'b',
		deletedAt: null,
		isDeleted: false,
		tabsets: [],
	});

	const role = (defaultRole
		.set('id', 'ra')
		.set('tabsets', fromJS([
			defaultItem.set('id', 'a').toJS(),
		]))
	);

	const groupRole = (defaultRole
		.set('id', 'rb')
		.set('ownerGroupId', 'ga')
		.set('group', fromJS({id: 'ga'}))
		.set('tabsets', fromJS([
			defaultItem.set('id', 'b').toJS(),
		]))
	);

	const reduction = reducer(
		fromJS({
			tabsets: [],
			roles: [],
			groups: [],
		}),
		rolesActions.getListDone([role.toJS(), groupRole.toJS()])
	).toJS();

	const correctReduction = {
		tabsets: [],
		roles: [
			(role
				.setIn(['tabsets', 0, '_meta'], fromJS({
					keyPath: ['roles', 0, 'tabsets', 0]
				}))
			).toJS(),
		],
		groups: [{
			id: 'ga',
			roles: [
				(groupRole
					.setIn(['tabsets', 0, '_meta'], fromJS({
						keyPath: ['groups', 0, 'roles', 0, 'tabsets', 0]
					}))
				).toJS(),
			],
			tabsets: [],
		}],
	};

	expect(reduction).toEqual(correctReduction);
});

it('tabsets: correctly reduces GROUPS:GET_LIST_DONE action', () => {
	const defaultRole = fromJS({
		name: 'a',
		logoUrl: 'b',
		id: 'ra',
		deletedAt: null,
		isDeleted: false,
		tabsets: [
			defaultItem.toJS(),
		],
	});

	const defaultGroup = fromJS({
		name: 'a',
		logoUrl: 'b',
		id: 'ga',
		deletedAt: null,
		isDeleted: false,
		tabsets: [
			defaultItem.toJS(),
		],
		roles: [
			defaultRole.toJS(),
		],
	});

	const reduction = reducer(fromJS({
		tabsets: [],
		roles: [],
		groups: [],
	}), groupsActions.getListDone([
		defaultGroup.toJS()
	])).toJS();

	const correctReduction = {
		tabsets: [],
		roles: [],
		groups: [
			(defaultGroup
				.filter(keyIn('id', 'name', 'roles', 'tabsets'))
				.setIn(['tabsets', 0, '_meta'], fromJS({
					keyPath: ['groups', 0, 'tabsets', 0]
				}))
				.set('roles', fromJS([]))
			).toJS(),
		]
	};

	expect(reduction).toEqual(correctReduction);
});

it('tabsets: correctly reduces TABSETS:ADD_ITEM_DONE action', () => {
	const reduction = reducer(fromJS({
		tabsets: [],
		roles: [],
		groups: [],
	}), actions.addItemDone(defaultItem.toJS())).toJS();

	const correctReduction = {
		tabsets: [
			defaultItemWithMeta.toJS()
		],
		roles: [],
		groups: [],
	};

	expect(reduction).toEqual(correctReduction);
});

it('tabsets: correctly reduces TABSETS:EDIT_ITEM_DONE action', () => {
	const reduction = reducer(fromJS({
		tabsets: [
			defaultItemWithMeta.toJS()
		],
		roles: [],
		groups: [],
	}), actions.editItemDone(
		defaultItemWithMeta.set('name', 'i').toJS()
	)).toJS();

	const correctReduction = {
		tabsets: [
			defaultItemWithMeta.set('name', 'i').toJS()
		],
		roles: [],
		groups: [],
	};

	expect(reduction).toEqual(correctReduction);
});

it('tabsets: correctly reduces TABSETS:REMOVE_ITEM_DONE action', () => {
	const reduction = reducer(fromJS({
		tabsets: [
			defaultItemWithMeta.toJS()
		],
		roles: [],
		groups: [],
	}), actions.removeItemDone(defaultItemWithMeta.toJS())).toJS();

	const correctReduction = {
		tabsets: [],
		roles: [],
		groups: [],
	};

	expect(reduction).toEqual(correctReduction);
});

it('tabsets: correctly reduces TABSETS:RESTORE_ITEM_DONE action', () => {
	const reduction = reducer(fromJS({
		tabsets: [],
		roles: [],
		groups: [],
	}), actions.restoreItemDone(defaultItemWithMeta.toJS())).toJS();

	const correctReduction = {
		tabsets: [defaultItemWithMeta.toJS()],
		roles: [],
		groups: [],
	};

	expect(reduction).toEqual(correctReduction);
});

