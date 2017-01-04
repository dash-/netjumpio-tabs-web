///
// Dependencies
///

import React, { Component } from 'react';


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

export default NotificationButtonsView;
