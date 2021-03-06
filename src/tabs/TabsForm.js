///
// Dependencies
///

import React, { Component, PropTypes } from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from '../forms/FormControl';

import Form from '../forms/Form';
import FormBody from '../forms/FormBody';
import FormImagicon from '../forms/FormImagicon';

import TabsFormNotifs from './notifs/TabsFormNotifs';


///
// View
///

class TabsFormView extends Component {
	render() {
		return (
			<FormBody>
				<TabsFormNotifs />
				<Form name="tabs" className="tabs-form">
					<div className="logo-section">
						<FormImagicon
							name="logoUrl"
							alt="Site Logo"
							altIcon="link"
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
						<FormGroup controlId="urlField">
							<ControlLabel>Web Address</ControlLabel>
							<FormControl
								name="url"
								type="text"
								placeholder="http://www.example.com/"
							/>
						</FormGroup>
					</div>
					{this.props.children}
				</Form>
			</FormBody>
		);
	}
}

TabsFormView.propTypes = {
	children: PropTypes.node,
};

export default TabsFormView;

