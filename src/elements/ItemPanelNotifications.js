///
// Dependencies
///

import React, { Component, PropTypes } from 'react';

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

ItemPanelNotificationsView.propTypes = {
	children: PropTypes.node,
};

export default ItemPanelNotificationsView;
