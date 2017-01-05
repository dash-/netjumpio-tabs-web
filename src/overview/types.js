///
// Dependencies
///

import { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';


///
// Types
///

export const OverviewRoot = ImmutablePropTypes.contains({
	selected: PropTypes.string.isRequired,
});

export const OverviewPanel = ImmutablePropTypes.contains({
	isExpanded: PropTypes.bool.isRequired,
});

export const OverviewPanels = ImmutablePropTypes.iterableOf(
	OverviewPanel
);

export const Overview = ImmutablePropTypes.contains({
	root: OverviewRoot.isRequired,
	panels: OverviewPanels.isRequired,
});

