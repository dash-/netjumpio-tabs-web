///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import isString from 'lodash/isString';

import * as types from './types';

import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';

import ExpanderButton from '../elements/ExpanderButton';
import Icon from '../elements/Icon';
import Scrollable from '../elements/Scrollable';

import * as actions from './actions';
import * as formsActions from '../forms/actions';


///
// View
///

class OverviewPanelItemView extends Component {
	///
	// Construction / Hooks
	///

	constructor(props) {
		super(props);

		this.onToggle = this.onToggle.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onShowForm = this.onShowForm.bind(this);
	}


	///
	// Event handling
	///

	onToggle() {
		this.props.toggleItem(this.props.name);
	}

	onSelect() {
		this.props.selectItem(this.props.name);
	}

	onShowForm() {
		this.props.clearForm(this.props.name);
		this.props.showForm(this.props.name);
	}


	///
	// Rendering
	///

	renderIcon(icon) {
		if(! icon) return '';

		if(isString(icon)) {
			icon = (
				<Icon name={icon} />
			);
		}

		return (
			<div className="item-icon">
				{icon}
			</div>
		);
	}

	render() {
		const isSelected = this.props.selected === this.props.name;
		const isExpanded = isSelected || this.props.overview.getIn(
			['panels', this.props.name, 'isExpanded']
		);

		const itemClassName = classNames('overview-panel-item', {
			selected: isSelected,
			expanded: isExpanded,
		});

		return (
			<div className={itemClassName}>
				<div className="item-header">
					<ExpanderButton
						expanded={isExpanded}
						disabled={isSelected}
						onClick={this.onToggle}
					/>
					<h4
						className="item-title"
						onClick={this.onSelect}
					>
						{this.renderIcon(this.props.icon)}
						{this.props.title}
					</h4>
					<Button
						className="add-button"
						onClick={this.onShowForm}
					>
						<Icon name="plus" />
					</Button>
				</div>
				<Panel
					collapsible expanded={isExpanded}
					className="item-content"
				>
					{this.props.notifications}
					<Scrollable>
						{this.props.children}
					</Scrollable>
				</Panel>
			</div>
		);
	}
}

OverviewPanelItemView.propTypes = {
	name: PropTypes.string.isRequired,
	icon: PropTypes.node,
	title: PropTypes.node.isRequired,
	selected: PropTypes.string,
	notifications: PropTypes.node,
	overview: types.Overview.isRequired,
	toggleItem: PropTypes.func.isRequired,
	selectItem: PropTypes.func.isRequired,
	clearForm: PropTypes.func.isRequired,
	showForm: PropTypes.func.isRequired,
	children: PropTypes.node,
};

export { OverviewPanelItemView };


///
// Container
///

function mapStateToProps(state) {
	return {
		selected: state.getIn(['overview', 'root', 'selected']),
		overview: state.get('overview'),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		toggleItem: (name) => dispatch(actions.toggleItem(name)),
		selectItem: (name) => dispatch(actions.selectItem(name)),
		clearForm: (name) => dispatch(formsActions.clearForm(name)),
		showForm: (name) => dispatch(formsActions.showForm(name)),
	};
}

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connector(OverviewPanelItemView);

