///
// Dependencies
///

import { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';


///
// Types
///

export const Profile = ImmutablePropTypes.contains({
	showPanel: PropTypes.bool,
});

