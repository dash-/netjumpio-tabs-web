///
// Dependencies
///

import React, { Component } from 'react';

import PanelNotifications from '../elements/PanelNotifications';
import RoleRemovedNotif from './RoleRemovedNotif';


///
// View
///

class RolesListNotifsView extends Component {
	///
	// Rendering
	///

	render() {
		return (
			<PanelNotifications>
				<RoleRemovedNotif />
			</PanelNotifications>
		);
	}
}

export default RolesListNotifsView;
