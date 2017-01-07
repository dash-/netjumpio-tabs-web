///
// Dependencies
///

import React, { Component } from 'react';

import FailRetryNotif from '../../elements/FailRetryNotif';

import * as actions from '../actions';


///
// View
///

class RestoreItemFailNotifView extends Component {
	///
	// Rendering
	///

	renderMessage(action, userMessage) {
		return (
			'Restoring tab "' + action.payload.name +
			'" failed. ' + userMessage
		);
	}

	render() {
		return (
			<FailRetryNotif
				triggeredBy={actions.RESTORE_ITEM_FAIL}
				renderMessage={this.renderMessage}
			/>
		);
	}
}

RestoreItemFailNotifView.propTypes = {};

export default RestoreItemFailNotifView;

