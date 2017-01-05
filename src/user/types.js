///
// Dependencies
///

import { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';


///
// Types
///

export const User = ImmutablePropTypes.contains({
	accessToken: PropTypes.string,
	loginTimestamp: PropTypes.number,
	loginTTL: PropTypes.number,
	id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	email: PropTypes.string,
	logoUrl: PropTypes.string,
	name: PropTypes.string,
	username: PropTypes.string,
});

export const Users = ImmutablePropTypes.iterableOf(
	User
);
