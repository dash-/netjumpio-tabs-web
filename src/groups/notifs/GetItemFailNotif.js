///
// Dependencies
///

import React, { Component } from 'react';

import FailRetryNotif from '../../elements/FailRetryNotif';

import * as actions from '../actions';


///
// View
///

class GetItemFailNotifView extends Component {
	///
	// Rendering
	///

	renderMessage(action, userMessage) {
		return (
			'Retrieving group failed. ' + userMessage
		);
	}

	render() {
		return (
			<FailRetryNotif
				triggeredBy={actions.GET_ITEM_FAIL}
				renderMessage={this.renderMessage}
			/>
		);
	}
}

GetItemFailNotifView.propTypes = {};

export default GetItemFailNotifView;

