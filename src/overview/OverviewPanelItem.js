///
// Dependencies
///

import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux';

import ExpanderButton from '../elements/ExpanderButton';
import Icon from '../elements/Icon';
import * as actions from './actions';


///
// View
///

class OverviewPanelItemView extends Component {
	render() {
		const isSelected = this.props.selected === this.props.name;
		const keyPath = ['panels', this.props.name, 'isExpanded'];
		const isExpanded = this.props.overview.getIn(keyPath) || isSelected;

		return (
			<div className="overview-panel-item">
				<div className="item-header">
					<ExpanderButton
						expanded={isExpanded}
						disabled={isSelected}
						onClick={this.props.onToggle}
					/>
					<h3
						className="item-title"
						onClick={this.props.onSelect}
					>
						{this.props.title}
					</h3>
					<Button className="add-button">
						<Icon name="plus" />
					</Button>
				</div>
				<Panel
					collapsible expanded={isExpanded}
					className="item-content"
				>
					{this.props.children}
				</Panel>
			</div>
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
	return {
		selected: state.getIn(['overview', 'root', 'selected']),
		overview: state.get('overview'),
	};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
		onToggle: () => dispatch(actions.toggleItem(ownProps.name)),
		onSelect: () => dispatch(actions.selectItem(ownProps.name)),
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(OverviewPanelItemView);

