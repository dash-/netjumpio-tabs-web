///
// Dependencies
///

import React, { Component } from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from '../forms/FormControl';

import Form from '../forms/Form';
import FormBody from '../forms/FormBody';
import FormImagicon from '../forms/FormImagicon';

import RolesFormNotifs from './notifs/RolesFormNotifs';


///
// View
///

class RolesFormView extends Component {
	render() {
		return (
			<FormBody>
				<RolesFormNotifs />
				<Form name="roles" className="roles-form">
					<div className="logo-section">
						<FormImagicon
							name="logoUrl"
							alt="Role Logo"
							altIcon="user-secret"
							size="l"
						/>
					</div>
					<div className="info-section">
						<FormGroup controlId="nameField">
							<ControlLabel>Name</ControlLabel>
							<FormControl
								name="name"
								type="text"
								placeholder="Role Name"
							/>
						</FormGroup>
					</div>
				</Form>
			</FormBody>
		);
	}
}

RolesFormView.propTypes = {}; 

export default RolesFormView;

