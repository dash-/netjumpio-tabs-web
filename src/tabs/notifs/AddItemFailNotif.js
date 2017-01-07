///
// Dependencies
///

import React, { Component } from 'react';

import FailRetryNotif from '../../elements/FailRetryNotif';

import * as actions from '../actions';


///
// View
///

class AddItemFailNotifView extends Component {
	///
	// Rendering
	///

	renderMessage(action, userMessage) {
		return (
			'Adding tab "' + action.payload.name +
			'" failed. ' + userMessage
		);
	}

	render() {
		return (
			<FailRetryNotif
				triggeredBy={actions.ADD_ITEM_FAIL}
				renderMessage={this.renderMessage}
			/>
		);
	}
}

AddItemFailNotifView.propTypes = {};

export default AddItemFailNotifView;

