///
// Dependencies
///

import React, { Component, PropTypes } from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from '../forms/FormControl';
import TabSetsLogo from '../elements/TabSetsLogo';

import Form from '../forms/Form';
import FormBody from '../forms/FormBody';
import FormImagicon from '../forms/FormImagicon';

import TabsetsFormNotifs from './notifs/TabsetsFormNotifs';

///
// View
///

class TabsetsFormView extends Component {
	render() {
		const altIcon = (
			<TabSetsLogo />
		);

		return (
			<FormBody>
				<TabsetsFormNotifs />
				<Form name="tabsets" className="tabsets-form">
					<div className="logo-section">
						<FormImagicon
							name="logoUrl"
							alt="Tabset Logo"
							altIcon={altIcon}
							size="l"
						/>
					</div>
					<div className="info-section">
						<FormGroup controlId="nameField">
							<ControlLabel>Name</ControlLabel>
							<FormControl
								name="name"
								type="text"
								placeholder="Tabset Name"
							/>
						</FormGroup>
					</div>
					{this.props.children}
				</Form>
			</FormBody>
		);
	}
}

TabsetsFormView.propTypes = {
	children: PropTypes.node,
};

export default TabsetsFormView;

