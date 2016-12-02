///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginPage from '../user/LoginPage';


///
// View
///

class GlobalLayout extends Component {
	renderChildren() {
		if(this.props.isLoggedIn) {
			return this.props.children
		}
		return '';
	}

	renderLoginPage() {
		if(this.props.isLoggedIn) {
			return '';
		}

		return <LoginPage />;
	}

  render() {
    return (
    	<div className="global-layout">
				{this.renderLoginPage()}
				{this.renderChildren()}
			</div>
    );
  }
}


///
// Container
///


function mapStateToProps(state) {
	return {
		isLoggedIn: state.getIn(['user', 'isLoggedIn']),
	};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(GlobalLayout);

