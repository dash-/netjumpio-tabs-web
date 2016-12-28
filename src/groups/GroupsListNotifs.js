///
// Dependencies
///

import React, { Component } from 'react';

import PanelNotifications from '../elements/PanelNotifications';
import GroupRemovedNotif from './GroupRemovedNotif';


///
// View
///

class GroupsListNotifsView extends Component {
	///
	// Rendering
	///

	render() {
		return (
			<PanelNotifications>
				<GroupRemovedNotif />
			</PanelNotifications>
		);
	}
}

export default GroupsListNotifsView;
