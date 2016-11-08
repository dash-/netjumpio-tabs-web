///
// Dependencies
///

import React, { Component } from 'react';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import { connect } from 'react-redux';

import orgHeader from './organization/header';
import OrganizationList from './organization/OrganizationListView';


///
// View
///

class OverviewPanelView extends Component {
	render() {
		return (
			<div className="overview-panel">
				<Accordion>
					<Panel header={orgHeader()} eventKey="orgs">
						<OrganizationList />
					</Panel>
				</Accordion>
			</div>
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(OverviewPanelView);

