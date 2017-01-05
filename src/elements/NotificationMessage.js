///
// Dependencies
///

import React, { Component, PropTypes } from 'react';


///
// View
///

class NotificationMessageView extends Component {
	///
	// Rendering
	///

	render() {
		return (
			<span className="notification-message">
				{this.props.children}
			</span>
		);
	}
}

NotificationMessageView.propTypes = {
	children: PropTypes.node.isRequired,
};

export default NotificationMessageView;
