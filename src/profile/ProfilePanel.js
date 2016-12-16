///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Icon from 'react-fontawesome';
import Button from 'react-bootstrap/lib/Button';

import Dismissible from '../elements/Dismissible';

import * as actions from './actions';


///
// View
///

class ProfilePanelView extends Component {
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
		if(! this.props.profile.get('showPanel')) {
			return null;
		}

		return (
			<Dismissible onDismiss={this.props.dismiss}>
				<div className="profile-panel">
					<div className="info-section">
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
						</div>
					</div>
					<div className="actions-section">
						<Button
							icon="sign-out"
							onClick={() => (console.log('clicked'))}
						>
							Sign out
						</Button>
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
		dismiss: () => dispatch(actions.dismiss()),
	};
}

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connector(ProfilePanelView);

