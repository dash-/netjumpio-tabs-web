///
// Dependencies
///

import React, { Component } from 'react';

import PanelNotifications from '../elements/PanelNotifications';
import PersonRemovedNotif from './PersonRemovedNotif';


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
				<PersonRemovedNotif />
			</PanelNotifications>
		);
	}
}

export default PeopleListNotifsView;
