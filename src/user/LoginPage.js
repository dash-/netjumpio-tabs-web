///
// Dependencies
///

import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';

import LoginForm from './LoginForm';


///
// View
///

class LoginPageView extends Component {
	render() {
		return (
			<div className="page login-page">
				<div className="login-section col-md-6 col-md-offset-3">
					<h1>Please sign in</h1>
					<LoginForm>
						<Button type="submit">
							Submit
						</Button>
					</LoginForm>
				</div>
			</div>
		);
	}
}

LoginPageView.propTypes = {}; 

export default LoginPageView;

