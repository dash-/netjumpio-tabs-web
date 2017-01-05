///
// Dependencies
///

import { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';


///
// Types
///

export const Init = ImmutablePropTypes.contains({
	progress: PropTypes.number,
});

