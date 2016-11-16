///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import CardsList from '../elements/CardsList';
import CardsListCategory from '../elements/CardsListCategory';
import DirsListItem from './DirsListItem';
import * as actions from './actions';


///
// View
///

class DirsListView extends Component {
	constructor(props) {
		super(props);

		this.props.retrieveDirs();
	}

	renderDirs(dirs) {
		if(_.isUndefined(dirs)) return '';

		return dirs.map((item, key) => (
			<DirsListItem item={item} key={key} />
		));
	}

	renderDirsByRole(roles, groupName) {
		if(_.isUndefined(roles)) return '';

		return roles.map((item, key) => (
			<CardsListCategory
				name={(groupName ? groupName + ' - ' : '') + item.get('name')}
				key={key}
			>
				{this.renderDirs(item.get('directives'))}
			</CardsListCategory>
		));
	}

	renderDirsByGroup(groups) {
		if(_.isUndefined(groups)) return '';

		return groups.map((item, key) => (
			<CardsListCategory
				name={item.get('name')}
				key={key}
			>
				{this.renderDirs(item.get('directives'))}
				{this.renderDirsByRole(item.get('byRole'), item.get('name'))}
			</CardsListCategory>
		));
	}

	render() {
		return (
			<CardsList theme="dark" className="dirs-list">
				{this.renderDirs(this.props.dirs.get('directives'))}
				{this.renderDirsByRole(this.props.dirs.get('byRole'))}
				{this.renderDirsByGroup(this.props.dirs.get('byGroup'))}
			</CardsList>
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
	return {
		dirs: state.get('dirs'),
	};
}

function mapDispatchToProps(dispatch) {
  return {
		retrieveDirs: () => dispatch(actions.retrieveDirs()),
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(DirsListView);

