///
// Dependencies
///

import React, { Component, PropTypes } from 'react';


///
// View
///

class ScrollableView extends Component {
	///
	// Rendering
	///

	render() {
		return (
			<div className="scrollable">
				{this.props.children}
			</div>
		);
	}
}

ScrollableView.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ScrollableView;
