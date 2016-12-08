///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Icon from './Icon';


///
// View
///

class ButtonsListItem extends Component {
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

	render() {
		return (
			<li className="buttons-list-item" onClick={this.onClick}>
				<Icon name={this.props.icon} />
				{this.props.children}
			</li>
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

export default connector(ButtonsListItem);

