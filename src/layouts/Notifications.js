///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Notifications from 'react-notification-system-redux';


///
// View
///

class NotificationsView extends Component {
	///
	// Rendering
	///

	render() {
		return (
			<Notifications
				notifications={this.props.notifications}
			/>
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
	return {
		notifications: state.get('notifications'),
	};
}

function mapDispatchToProps(dispatch) {
	return { };
}

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connector(NotificationsView);

