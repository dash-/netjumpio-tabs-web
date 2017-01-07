///
// Dependencies
///

import React, { Component } from 'react';

import FailRetryNotif from '../../elements/FailRetryNotif';

import * as actions from '../actions';


///
// View
///

class GetListFailNotifView extends Component {
	///
	// Rendering
	///

	renderMessage(action, userMessage) {
		return (
			'Retrieving roles failed. ' + userMessage
		);
	}

	render() {
		return (
			<FailRetryNotif
				triggeredBy={actions.GET_LIST_FAIL}
				renderMessage={this.renderMessage}
			/>
		);
	}
}

GetListFailNotifView.propTypes = {};

export default GetListFailNotifView;

