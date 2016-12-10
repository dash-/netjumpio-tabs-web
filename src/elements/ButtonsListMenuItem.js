///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Icon from 'react-fontawesome';
import MenuItem from 'react-bootstrap/lib/MenuItem';


///
// View
///

class ButtonsListMenuItemView extends Component {
	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick(evt) {
		if(this.props.onClick) {
			return this.props.onClick(evt, this.props);
		}
		return this.props.dispatchAction(this.props.action);
	}

	renderIcon() {
		if(! this.props.icon) {
			return '';
		}

		return (
			<Icon name={this.props.icon} />
		);
	}

	render() {
		return (
			<MenuItem 
				className="menu-item"
				onClick={this.onClick}
				eventKey={this.props.eventKey}
			>
				<span className="icon">
					{this.renderIcon()}
				</span>
				<span className="title">
					{this.props.title}
				</span>
			</MenuItem>
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
	return {
		tabsets: state.get('tabsets').get('list'),
	};
}

function mapDispatchToProps(dispatch) {
  return {
		dispatchAction: (action) => dispatch(action),
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(ButtonsListMenuItemView);

