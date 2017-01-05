///
// Dependencies
///

import { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import assign from 'lodash/assign';

import * as groupsTypes from '../groups/types';


///
// Data structures
///

export const listItem = {
	logoUrl: PropTypes.string,
	name: PropTypes.string,
	url: PropTypes.string,
	id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
};

///
// Types
///

export const ListItem = ImmutablePropTypes.contains(listItem);

export const ListRoles = ImmutablePropTypes.iterableOf(
	ListItem,
);

export const ListGroups = ImmutablePropTypes.iterableOf(
	ImmutablePropTypes.contains(
		assign({}, groupsTypes.listItem, {
			roles: ImmutablePropTypes.iterableOf(ListItem)
		})
	)
);

export const List = ImmutablePropTypes.contains({
	roles: ListRoles,
	groups: ListGroups,
});

