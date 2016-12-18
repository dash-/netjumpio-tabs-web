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

class TabsFormView extends Component {
	render() {
		return (
			<Form name="tabs" className="tabsets-form">
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
				<FormGroup controlId="logoUrlField">
					<ControlLabel>Logo URL</ControlLabel>
					<FormControl
						name="logoUrl"
						type="text"
						placeholder="https://www.example.com/icon.png"
					/>
				</FormGroup>
				{this.props.children}
			</Form>
		);
	}
}

export default TabsFormView;

