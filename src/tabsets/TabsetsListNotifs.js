///
// Dependencies
///

import React, { Component } from 'react';

import PanelNotifications from '../elements/PanelNotifications';
import TabsetRemovedNotif from './TabsetRemovedNotif';


///
// View
///

class TabsetsListNotifsView extends Component {
	///
	// Rendering
	///

	render() {
		return (
			<PanelNotifications>
				<TabsetRemovedNotif />
			</PanelNotifications>
		);
	}
}

export default TabsetsListNotifsView;
