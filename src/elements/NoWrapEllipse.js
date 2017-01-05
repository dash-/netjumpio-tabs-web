///
// Dependencies
///

import React, { Component, PropTypes } from 'react';


///
// View
///

class NoWrapEllipseView extends Component {
	render() {
		return (
			<div className="text-nowrap overflow-ellipse">
				{this.props.children}
			</div>
		);
	}
}

NoWrapEllipseView.propTypes = {
	children: PropTypes.node,
};

export default NoWrapEllipseView;
