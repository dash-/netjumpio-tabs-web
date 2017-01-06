///
// Dependencies
///

import React, { Component, PropTypes } from 'react';

import NotificationsList from './NotificationsList';


///
// View
///

class FormNotificationsView extends Component {
	render() {
		return (
			<div className="form-notifications">
				<NotificationsList>
					{this.props.children}
				</NotificationsList>
			</div>
		);
	}
}

FormNotificationsView.propTypes = {
	children: PropTypes.node,
};

export default FormNotificationsView;

