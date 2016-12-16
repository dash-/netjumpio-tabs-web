///
// Dependencies
///

import React, { Component } from 'react';

import NotificationsList from './NotificationsList';


///
// View
///

class ItemPanelNotificationsView extends Component {
	render() {
		return (
			<div className="item-panel-notifications">
				<NotificationsList>
					{this.props.children}
				</NotificationsList>
			</div>
		);
	}
}

export default ItemPanelNotificationsView;
