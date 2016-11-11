///
// Dependencies
///

import React, { Component } from 'react';

import OverviewPanelItem from './OverviewPanelItem';


///
// View
///

class OverviewPanelView extends Component {
	render() {
		return (
			<div className="overview-panel">
				<OverviewPanelItem name="orgsPanel" title="Organizations">
					Content
				</OverviewPanelItem>
				<OverviewPanelItem name="usersPanel" title="Users">
					Content
				</OverviewPanelItem>
				<OverviewPanelItem name="rolesPanel" title="Roles">
					Content
				</OverviewPanelItem>
				<OverviewPanelItem name="dirsPanel" title="Directives">
					Content
				</OverviewPanelItem>
			</div>
		);
	}
}

export default OverviewPanelView;

