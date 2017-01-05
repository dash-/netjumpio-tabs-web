///
// Dependencies
///

import { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';


///
// Types
///

export const ListItem = ImmutablePropTypes.contains({
	logoUrl: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
});

export const List = ImmutablePropTypes.iterableOf(
	ListItem
);

