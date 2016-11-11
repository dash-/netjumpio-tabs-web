///
// Dependencies
///

import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import { connect } from 'react-redux';
import classNames from 'classnames';

import * as actions from '../actions';
import OrgList from './OrgList';


///
// View
///

class OrgPanel extends Component {
	constructor(props) {
console.log(props);
		props.name = 'OrgPanel';
		props.expanded = false;
		super(props);

		this.onExpandCollapse = this.expandCollapse.bind(this);
	}

	getExpanderClass() {
		return classNames('fa', 'fa-lg', {
			'fa-caret-down': this.props.expanded,
			'fa-caret-right': ! this.props.expanded,
		});
	}

	expandCollapse() {
		this.props.expanded = ! this.props.expanded;
		actions.selectItem(this.props.name);
	}

	render() {
		var expanderClass = this.getExpanderClass();

		return (
			<div className="overview-panel-item">
				<div className="item-header">
					<button
						className="expander-button"
						onClick={this.onExpandCollapse}
					>
						<i className={expanderClass}></i>
					</button>
					Organizations
					<button className="add-button btn btn-default">
						<i className="fa fa-plus"></i> Add
					</button>
				</div>
				<Panel
					collapsible expanded={this.props.expanded}
					className="item-content"
				>
					<OrgList />
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
		overview: state.get('overview'),
	};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(OrgPanel);

