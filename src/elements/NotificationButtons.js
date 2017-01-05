///
// Dependencies
///

import React, { Component, PropTypes } from 'react';


///
// View
///

class NotificationButtonsView extends Component {
	///
	// Rendering
	///

	render() {
		return (
			<div className="notification-buttons">
				{this.props.children}
			</div>
		);
	}
}

NotificationButtonsView.propTypes = {
	children: PropTypes.node,
};

export default NotificationButtonsView;
