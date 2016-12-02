///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/lib/Button';

import buildFormSubmitter from '../forms/buildFormSubmitter';
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
					<LoginForm onSubmit={this.props.submitForm}>
						<Button type="submit">
							Submit
						</Button>
					</LoginForm>
				</div>
			</div>
    );
  }
}


///
// Container
///

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		submitForm: buildFormSubmitter(dispatch, 'login'),
	};
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(LoginPageView);

