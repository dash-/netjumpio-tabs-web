///
// Dependencies
///

import React, { Component } from 'react';

import FailRetryNotif from '../../elements/FailRetryNotif';

import * as actions from '../actions';


///
// View
///

class RemoveItemFailNotifView extends Component {
	///
	// Rendering
	///

	renderMessage(action, userMessage) {
		return (
			'Removing group "' + action.payload.name +
			'" failed. ' + userMessage
		);
	}

	render() {
		return (
			<FailRetryNotif
				triggeredBy={actions.REMOVE_ITEM_FAIL}
				renderMessage={this.renderMessage}
			/>
		);
	}
}

RemoveItemFailNotifView.propTypes = {};

export default RemoveItemFailNotifView;

