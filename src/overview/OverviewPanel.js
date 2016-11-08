///
// Dependencies
///

import React, { Component } from 'react';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import { connect } from 'react-redux';

import OrgHeader from './org/OrgHeader';
import OrgList from './org/OrgList';


///
// View
///

class OverviewPanelView extends Component {
	orgHeader() {
		return (<OrgHeader />);
	}

	render() {
		return (
			<div className="overview-panel">
				<Accordion>
					<Panel header={this.orgHeader()} eventKey="orgs">
						<OrgList />
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

