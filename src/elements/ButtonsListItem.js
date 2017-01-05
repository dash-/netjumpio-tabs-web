///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Icon from 'react-fontawesome';


///
// View
///

class ButtonsListItemView extends Component {
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

ButtonsListItemView.propTypes = {
	onClick: PropTypes.func,
	dispatchAction: PropTypes.func,
	action: PropTypes.object,
	icon: PropTypes.string,
	children: PropTypes.node,
};


///
// Container
///

function mapStateToProps(state) {
	return {
		tabsets: state.getIn(['tabsets', 'list']),
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

export default connector(ButtonsListItemView);

