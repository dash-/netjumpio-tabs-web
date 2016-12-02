///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';


///
// View
///

class LoginPageView extends Component {
  render() {
    return (
    	<div className="login-page">
				<LoginForm />
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
  return {};
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(LoginPageView);

