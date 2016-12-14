///
// Dependencies
///

import React, { Component } from 'react';
import includes from 'lodash/includes';
import isUndefined from 'lodash/isUndefined';
import isFunction from 'lodash/isFunction';
import assign from 'lodash/assign';
import omit from 'lodash/omit';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { InlineNotification } from 'react-redux-notifications-immutable';
import Alert from 'react-bootstrap/lib/Alert';


///
// View
///

class InlineNotificationView extends Component {
	///
	// Construction / hooks
	///

	constructor(props) {
		super(props);

		this.renderContainer = this.renderContainer.bind(this);
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
	// Rendering
	///

	renderMessage(notification) {
		if(isFunction(this.props.renderMessage)) {
			return this.props.renderMessage(notification);
		}

		return this.props.message || this.props.defaultMessage || '';
	}

	renderContainer(notifications) {
		// TODO Does not work right: feat/cr-26
		return (
			<ReactCSSTransitionGroup
				transitionName='alert'
				transitionEnterTimeout={200}
				transitionLeaveTimeout={500}
			>
				{notifications}
			</ReactCSSTransitionGroup>
		);
	}

	renderNotification(notification) {
		// TODO Need to add dismiss button: feat/25
		const type = this.getValidType(this.props.type);
		return (
			<Alert
				key={notification.key}
				bsStyle={this.getBootstrapClass(type)}
				className="notification"
			>
				<strong>
					{this.getTitle(this.props.title, type)}
				</strong>
				&nbsp;
				{this.renderMessage(notification)}
				{this.props.children}
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
		// elements/InlineNotifications component properties:
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
			renderContainer: this.renderContainer,
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

export default InlineNotificationView;
