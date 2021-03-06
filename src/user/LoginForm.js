///
// Dependencies
///

import React, { Component, PropTypes } from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

import Form from '../forms/Form';
import FormControl from '../forms/FormControl';


///
// View
///

class LoginFormView extends Component {
	render() {
		return (
			<Form
				name="login"
				className="login-form"
			>
				<FormGroup controlId="emailField">
					<ControlLabel>Email</ControlLabel>
					<FormControl
						name="email"
						type="text"
						placeholder="example@example.com"
					/>
				</FormGroup>
				<FormGroup controlId="passwordField">
					<ControlLabel>Password</ControlLabel>
					<FormControl
						name="password"
						type="password"
					/>
				</FormGroup>
				{this.props.children}
			</Form>
		);
	}
}

LoginFormView.propTypes = {
	children: PropTypes.node,
};

export default LoginFormView;

