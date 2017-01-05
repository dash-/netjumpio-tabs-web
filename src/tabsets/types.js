///
// Dependencies
///

import { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import assign from 'lodash/assign';

import * as tabsTypes from '../tabs/types';
import * as groupsTypes from '../groups/types';
import * as rolesTypes from '../roles/types';


///
// Data structures
///

export const listItem = {
	name: PropTypes.string,
	logoUrl: PropTypes.string,
	ownerPersonId: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	tabs: tabsTypes.List,
};


///
// Types
///

export const Item = ImmutablePropTypes.contains(
	assign({}, listItem, {
		tabs: tabsTypes.List,
	})
);

export const ListItem = ImmutablePropTypes.contains(listItem);

export const ListTabsets = ImmutablePropTypes.iterableOf(ListItem);

export const ListRoles = ImmutablePropTypes.iterableOf(
	ImmutablePropTypes.contains(
		assign({}, rolesTypes.listItem, {
			tabsets: ImmutablePropTypes.iterableOf(
				ImmutablePropTypes.contains(listItem),
			),
		})
	)
);

export const ListGroups = ImmutablePropTypes.iterableOf(
	ImmutablePropTypes.contains(
		assign({}, groupsTypes.listItem, {
			tabsets: ImmutablePropTypes.iterableOf(
				ImmutablePropTypes.contains(listItem),
			),
			roles: ImmutablePropTypes.iterableOf(
				ImmutablePropTypes.contains(
					assign({}, rolesTypes.listItem, {
						tabsets: ImmutablePropTypes.iterableOf(
							ImmutablePropTypes.contains(listItem),
						),
					})
				),
			),
		})
	)
);

export const List = ImmutablePropTypes.contains({
	tabsets: ListTabsets,
	roles: ListRoles,
	groups: ListGroups,
});

