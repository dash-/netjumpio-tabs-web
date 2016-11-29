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

class TabsetsFormView extends Component {
	render() {
		return (
			<Form name="tabsets" className="tabsets-form">
				<FormGroup controlId="nameField">
					<ControlLabel>Name</ControlLabel>
					<FormControl
						name="name"
						type="text"
						placeholder="Tabset Name"
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

export default TabsetsFormView;

