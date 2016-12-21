///
// Dependencies
///

import React, { Component } from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from '../forms/FormControl';

import Form from '../forms/Form';
import FormImagicon from '../forms/FormImagicon';


///
// View
///

class GroupsFormView extends Component {
	render() {
		return (
			<Form name="groups" className="groups-form">
				<div className="logo-section">
					<FormImagicon
						name="logoUrl"
						alt="Group Logo"
						altIcon="id-card"
						size="l"
					/>
				</div>
				<div className="info-section">
					<FormGroup controlId="nameField">
						<ControlLabel>Name</ControlLabel>
						<FormControl
							name="name"
							type="text"
							placeholder="Group Name"
						/>
					</FormGroup>
					<FormGroup controlId="urlField">
						<ControlLabel>Website</ControlLabel>
						<FormControl
							name="url"
							type="text"
							placeholder="https://www.example.com"
						/>
					</FormGroup>
				</div>
			</Form>
		);
	}
}

export default GroupsFormView;

