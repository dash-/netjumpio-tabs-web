///
// Dependencies
///

import { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';


///
// Types
///

export const Form = ImmutablePropTypes.contains({
	isVisible: PropTypes.bool,
	allowClear: PropTypes.bool,
	allowHide: PropTypes.bool,
	dataHasInitialized: PropTypes.bool,
	uploads: ImmutablePropTypes.iterable,
	values: ImmutablePropTypes.iterable.isRequired,
}).isRequired;

export const Forms = ImmutablePropTypes.iterableOf(
	Form
);
