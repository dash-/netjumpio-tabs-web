///
// Dependencies
///

import React, { Component } from 'react';

import FailRetryNotif from '../../elements/FailRetryNotif';

import * as actions from '../actions';


///
// View
///

class EditItemFailNotifView extends Component {
	///
	// Rendering
	///

	renderMessage(action, userMessage) {
		return (
			'Updating role "' + action.payload.name +
			'" failed. ' + userMessage
		);
	}

	render() {
		return (
			<FailRetryNotif
				triggeredBy={actions.EDIT_ITEM_FAIL}
				renderMessage={this.renderMessage}
			/>
		);
	}
}

EditItemFailNotifView.propTypes = {};

export default EditItemFailNotifView;

