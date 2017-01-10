///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as userTools from '../user/tools';
import * as userTypes from '../user/types';
import * as initTypes from '../init/types';

import Col from 'react-bootstrap/lib/Col';

import Header from './Header';
import OverviewPanel from '../overview/OverviewPanel';
import ProfilePanel from '../profile/ProfilePanel';
import LoginPage from '../user/LoginPage';
import Initializer from '../init/Initializer';


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
			<Col md={4} className="side-panel dark-theme">
				<OverviewPanel />
			</Col>
		);
	}

	renderInitializer() {
		if(! userTools.isLoggedIn(this.props.user)) {
			return '';
		}

		if(this.props.init && this.props.init.get('progress') >= 1) {
			return '';
		}

		return (
			<Initializer />
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
				{this.renderInitializer()}
				<ProfilePanel />
				{this.renderMainPanel()}
				{this.renderSidePanel()}
			</div>
		);
	}
}

AppLayoutView.propTypes = {
	user: userTypes.User.isRequired,
	init: initTypes.Init.isRequired,
	children: PropTypes.node,
};

export { AppLayoutView };


///
// Container
///

function mapStateToProps(state) {
	return {
		user: state.get('user'),
		init: state.get('init'),
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

