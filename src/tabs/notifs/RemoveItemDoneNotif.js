///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/lib/Button';

import NotificationsListItem from '../../elements/NotificationsListItem';
import NotificationMessage from '../../elements/NotificationMessage';
import NotificationButtons from '../../elements/NotificationButtons';

import * as actions from '../actions';


///
// View
///

class RemoveItemDoneNotifView extends Component {
	///
	// Construction
	///

	constructor(props) {
		super(props);

		this.restoreItem = this.restoreItem.bind(this);
		this.renderMessage = this.renderMessage.bind(this);
	}


	///
	// Event handlers
	///

	restoreItem(item, dismiss) {
		return () => {
			this.props.restoreItem(item);
			dismiss();
		};
	}


	///
	// Rendering
	///

	renderMessage(notification, dismiss) {
		const name = notification.trigger.payload.url;
		const item = notification.trigger.payload;
		return (
			<NotificationMessage>
				Tab "{name}" removed.
				<NotificationButtons>
					<Button
						bsStyle="success"
						onClick={this.restoreItem(item, dismiss)}
					>
						Undo
					</Button>
				</NotificationButtons>
			</NotificationMessage>
		);
	}

	render() {
		return (
			<NotificationsListItem
				type="success"
				triggeredBy={actions.REMOVE_ITEM_DONE}
				renderMessage={this.renderMessage}
			/>
		);
	}
}

RemoveItemDoneNotifView.propTypes = {
	restoreItem: PropTypes.func.isRequired,
};


///
// Container
///

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		restoreItem: (item) => dispatch(actions.restoreItemStart(item)),
	};
}

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connector(RemoveItemDoneNotifView);

