///
// Dependencies
///

import React, { Component } from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from '../forms/FormControl';

import Form from '../forms/Form';


///
// View
///

class GroupsFormView extends Component {
	render() {
		return (
			<Form name="groups" className="groups-form">
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
				<FormGroup controlId="logoUrlField">
					<ControlLabel>Logo URL</ControlLabel>
					<FormControl
						name="logoUrl"
						type="text"
						placeholder="https://www.example.com/icon.png"
					/>
				</FormGroup>
			</Form>
		);
	}
}

export default GroupsFormView;

