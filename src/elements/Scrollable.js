///
// Dependencies
///

import React, { Component } from 'react';


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

export default ScrollableView;
