///
// Dependencies
///

import React, { Component } from 'react';


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

export default NotificationMessageView;
