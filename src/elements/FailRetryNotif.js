///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/lib/Button';

import NotificationsListItem from '../elements/NotificationsListItem';
import NotificationMessage from '../elements/NotificationMessage';
import NotificationButtons from '../elements/NotificationButtons';


///
// View
///

class FailRetryNotifView extends Component {
	///
	// Construction
	///

	constructor(props) {
		super(props);

		this.retryAction = this.retryAction.bind(this);
		this.renderMessage = this.renderMessage.bind(this);
	}


	///
	// Event handlers
	///

	retryAction(action, dismiss) {
		return () => {
			this.props.dispatch(action);
			dismiss();
		};
	}


	///
	// Rendering
	///

	renderMessage(notification, dismiss) {
		const action = notification.trigger.payload.action;
		const error = notification.trigger.payload.error;
		const userMessage = (
			error.userMessage ? '(' + error.userMessage + ')' : ''
		);

		const message = this.props.renderMessage(
			action, userMessage, error
		);

		return (
			<NotificationMessage>
				{message}
				<NotificationButtons>
					<Button
						bsStyle="danger"
						onClick={this.retryAction(action, dismiss)}
					>
						Retry
					</Button>
				</NotificationButtons>
			</NotificationMessage>
		);
	}

	render() {
		return (
			<NotificationsListItem
				type="error"
				triggeredBy={this.props.triggeredBy}
				renderMessage={this.renderMessage}
				hideAfter={this.props.hideAfter}
			/>
		);
	}
}

FailRetryNotifView.propTypes = {
	hideAfter: PropTypes.number,
	triggeredBy: PropTypes.string.isRequired,
	dispatch: PropTypes.func.isRequired,
};

FailRetryNotifView.defaultProps = {
	hideAfter: 15000,
};


///
// Container
///

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch,
	};
}

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connector(FailRetryNotifView);

