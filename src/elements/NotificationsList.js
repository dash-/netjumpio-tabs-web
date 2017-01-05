///
// Dependencies
///

import React, { Component, PropTypes } from 'react';


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

NotificationsListView.propTypes = {
	children: PropTypes.node,
};

export default NotificationsListView;
