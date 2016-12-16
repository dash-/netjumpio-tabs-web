///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Icon from 'react-fontawesome';

import * as actions from './actions';


///
// View
///

class ProfilePanelButtonView extends Component {
	///
	// Construction
	///

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}


	///
	// Event handling
	///

	handleClick(evt) {
		this.props.toggleProfilePanel();
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
			<Icon name="user-circle" size="2x" />
		);
	}

	render() {
		if(! this.props.user.get('id')) {
			return null;
		}

		return (
			<div className="profile-panel-button">
				<button onClick={this.handleClick}>
					{this.renderLogo()}
				</button>
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
	return {
		toggleProfilePanel: () => dispatch(actions.toggleProfilePanel()),
	};
}

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connector(ProfilePanelButtonView);

