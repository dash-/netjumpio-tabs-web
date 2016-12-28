///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Icon from 'react-fontawesome';
import Button from 'react-bootstrap/lib/Button';

import Dismissible from '../elements/Dismissible';

import * as actions from './actions';
import * as userActions from '../user/actions';


///
// View
///

class ProfilePanelView extends Component {
	///
	// Construction
	///

	constructor(props) {
		super(props);

		this.signOut = this.signOut.bind(this);
	}


	///
	// Event handling
	///

	signOut() {
		this.props.signOut();
		this.props.dismiss();
	}


	///
	// Rendering
	///

	renderLogo() {
		const name = this.props.user.get('name');
		const logoUrl = this.props.user.get('logoUrl');

		if(logoUrl) {
			return (
				<img src={logoUrl} alt={name} />
			);
		}

		return (
			<Icon name="user-circle" />
		);
	}

	render() {
		if(! this.props.user.get('id')) {
			return null;
		}

		if(! this.props.profile.get('showPanel')) {
			return null;
		}

		return (
			<Dismissible onDismiss={this.props.dismiss}>
				<div className="light-theme">
					<div className="profile-panel">
						<div className="profile-section">
							<div className="logo">
								{this.renderLogo()}
							</div>
							<div className="contact-info">
								<div className="name">
									{this.props.user.get('name')}
								</div>
								<div className="email">
									{this.props.user.get('email')}
								</div>
								<div className="actions">
									<Button bsStyle="primary">
										Edit profile
									</Button>
								</div>
							</div>
						</div>
						<div className="aux-actions-section">
							<Button onClick={this.signOut}>
								Sign out
							</Button>
						</div>
					</div>
				</div>
			</Dismissible>
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
	return {
		user: state.get('user'),
		profile: state.get('profile'),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dismiss: () => dispatch(actions.toggleProfilePanel()),
		signOut: () => dispatch(userActions.logoutStart()),
	};
}

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connector(ProfilePanelView);

