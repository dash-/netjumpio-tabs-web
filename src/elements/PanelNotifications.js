///
// Dependencies
///

import React, { Component } from 'react';

import NotificationsList from './NotificationsList';


///
// View
///

class PanelNotificationsView extends Component {
	render() {
		return (
			<div className="panel-notifications">
				<NotificationsList>
					{this.props.children}
				</NotificationsList>
			</div>
		);
	}
}

export default PanelNotificationsView;
