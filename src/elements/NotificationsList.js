///
// Dependencies
///

import React, { Component } from 'react';


///
// View
///

class NotificationsListView extends Component {
	render() {
		return (
			<div className="notifications-list">
				{this.props.children}
			</div>
		);
	}
}

export default NotificationsListView;
