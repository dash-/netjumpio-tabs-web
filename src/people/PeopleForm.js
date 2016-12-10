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

class PeopleFormView extends Component {
	render() {
		return (
			<Form name="people" className="people-form">
				<FormGroup controlId="nameField">
					<ControlLabel>Full Name</ControlLabel>
					<FormControl
						name="name"
						type="text"
						placeholder="John L.M. Doe Jr."
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

export default PeopleFormView;

