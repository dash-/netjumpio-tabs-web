///
// Dependencies
///

import React, { Component, PropTypes } from 'react';

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

PanelNotificationsView.propTypes = {
	children: PropTypes.node,
};

export default PanelNotificationsView;
