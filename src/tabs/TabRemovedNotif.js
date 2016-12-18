///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/lib/Button';

import NotificationsListItem from '../elements/NotificationsListItem';
import NotificationButtons from '../elements/NotificationButtons';

import * as actions from './actions';


///
// View
///

class TabRemovedNotifView extends Component {
	///
	// Construction
	///

	constructor(props) {
		super(props);

		this.restoreTab = this.restoreTab.bind(this);
		this.renderMessage = this.renderMessage.bind(this);
	}


	///
	// Event handlers
	///

	restoreTab(tab) {
		return () => (
			this.props.restoreTab(tab)
		);
	}


	///
	// Rendering
	///

	renderMessage(notification) {
		const name = notification.trigger.payload.url;
		const tab = notification.trigger.payload;
		return (
			<span>
				Tab "{name}" removed.
				<NotificationButtons>
					<Button
						bsStyle="success"
						onClick={this.restoreTab(tab)}
					>
						Undo
					</Button>
				</NotificationButtons>
			</span>
		);
	}

	render() {
		return (
			<NotificationsListItem
				type="success"
				triggeredBy={actions.REMOVE_TAB_DONE}
				renderMessage={this.renderMessage}
			/>
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
		restoreTab: (tab) => dispatch(actions.restoreTabStart(tab)),
	};
}

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connector(TabRemovedNotifView);

