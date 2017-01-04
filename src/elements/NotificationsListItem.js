///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';
import includes from 'lodash/includes';
import isUndefined from 'lodash/isUndefined';
import isFunction from 'lodash/isFunction';
import assign from 'lodash/assign';
import omit from 'lodash/omit';

import { InlineNotification } from 'react-redux-notifications-immutable';
import { hide } from 'react-redux-notifications-immutable/dist-modules/notifications.redux';
import Alert from 'react-bootstrap/lib/Alert';
import Icon from 'react-fontawesome';


///
// View
///

class NotificationsListItemView extends Component {
	///
	// Construction / hooks
	///

	constructor(props) {
		super(props);

		this.dismiss = this.dismiss.bind(this);
		this.renderNotification = this.renderNotification.bind(this);
	}


	///
	// Methods
	///

	getValidType(type) {
		const validTypes = ['success', 'info', 'warning', 'error'];
		const defaultType = 'info';

		if(includes(validTypes, type)) {
			return type;
		}

		return defaultType;
	}

	getTitle(title, type) {
		if(! isUndefined(title)) {
			return title;
		}

		const typeTitleMap = {
			success: 'Success!',
			info: '',
			warning: 'Warning!',
			error: 'Error!',
		};

		return typeTitleMap[type];
	}

	getBootstrapClass(type) {
		const typeBsClassMap = {
			success: 'success',
			info: 'info',
			warning: 'warning',
			error: 'danger',
		};

		return typeBsClassMap[type];
	}


	///
	// Event handlers
	///

	dismiss(trigger, key) {
		return () => (
			this.props.dismiss(trigger.type, key)
		);
	}


	///
	// Rendering
	///

	renderMessage(notification, dismiss) {
		if(isFunction(this.props.renderMessage)) {
			return this.props.renderMessage(notification, dismiss);
		}

		return this.props.message || this.props.defaultMessage || '';
	}

	renderNotification(notification) {
		const trigger = notification.trigger;
		const key = notification.key;
		const type = this.getValidType(this.props.type);
		const dismiss = this.dismiss(trigger, key);

		return (
			<Alert
				key={notification.key}
				bsStyle={this.getBootstrapClass(type)}
				className="notifications-list-item"
			>
				<strong>
					{this.getTitle(this.props.title, type)}
				</strong>
				&nbsp;
				{this.renderMessage(notification, dismiss)}
				{this.props.children}
				<span className="dismiss">
					<button onClick={dismiss}>
						<Icon name="times" />
					</button>
				</span>
			</Alert>
		);
	}

	render() {
		///
		// react-redux-notifications InlineNotification component properties:
		//
		//   defaultMessage: string
		//   message: string
		//   hideAfter: number (ms)
		//   triggeredBy: (redux action)
		//   showDismiss: boolean
		//   renderNotification: function(notifications)
		//   renderContainer: function(notifications)
		//
		// elements/Notifications component properties:
		//
		//   (All of the above, except...)
		//   showDismiss (always present)
		//   renderNotification
		//   renderContainer
		//
		//   (Plus...)
		//   type: string (success, info, warning, error)
		//   title: string
		//   fadeIn: number (ms)
		//   fadeOut: number (ms)
		//   children: (children)
		//
		///
		let props = assign({
			hideAfter: 4000,
			renderNotification: this.renderNotification,
		}, omit(this.props, [
			'defaultMessage', 'message', 'showDismiss',
			'renderNotification', 'renderContainer',
			'type', 'title', 'fadeIn', 'fadeOut',
			'children'
		]));

		if(props.hideAfter === 0) {
			delete props.hideAfter;
		}

		return React.createElement(
			InlineNotification, props, this.props.children
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
	return { };
}

function mapDispatchToProps(dispatch) {
	return {
		dismiss: (trigger, key) => dispatch(hide(trigger, key)),
	};
}

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connector(NotificationsListItemView);

