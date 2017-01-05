///
// Dependencies
///

import { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';


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

export const ListGroups = ImmutablePropTypes.iterableOf(
	ListItem,
);

export const List = ImmutablePropTypes.contains({
	groups: ListGroups,
});

