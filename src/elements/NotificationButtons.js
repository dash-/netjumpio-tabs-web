///
// Dependencies
///

import React, { Component } from 'react';


///
// View
///

class NotificationButtonsView extends Component {
	render() {
		return (
			<div className="notification-buttons">
				{this.props.children}
			</div>
		);
	}
}

export default NotificationButtonsView;
