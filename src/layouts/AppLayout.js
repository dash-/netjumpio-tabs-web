///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as userTools from '../user/tools';

import Col from 'react-bootstrap/lib/Col';

import Header from './Header';
import SidePanel from './SidePanel';
import LoginPage from '../user/LoginPage';


///
// View
///

class AppLayoutView extends Component {
	renderMainPanel() {
		if(! userTools.isLoggedIn(this.props.user)) {
			return '';
		}

		return (
			<Col md={8} className="main-panel">
				{this.props.children}
			</Col>
		);
	}

	renderSidePanel() {
		if(! userTools.isLoggedIn(this.props.user)) {
			return '';
		}

		return (
			<Col md={4} className="side-panel">
				<SidePanel />
			</Col>
		);
	}

	renderLoginPage() {
		if(userTools.isLoggedIn(this.props.user)) {
			return '';
		}

		return <LoginPage />;
	}

  render() {
    return (
    	<div className="app-layout">
    		<Header />
				{this.renderLoginPage()}
				{this.renderMainPanel()}
				{this.renderSidePanel()}
			</div>
    );
  }
}


///
// Container
///

function mapStateToProps(state) {
	return {
		user: state.get('user'),
	};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(AppLayoutView);

