///
// Dependencies
///

import React, { Component } from 'react';

import PanelNotifications from '../../elements/PanelNotifications';
import RemoveItemDoneNotif from './RemoveItemDoneNotif';


///
// View
///

class PeopleListNotifsView extends Component {
	///
	// Rendering
	///

	render() {
		return (
			<PanelNotifications>
				<RemoveItemDoneNotif />
			</PanelNotifications>
		);
	}
}

export default PeopleListNotifsView;
