///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import * as types from './types';

import TabSetsLogo from '../elements/TabSetsLogo';

import OverviewPanelItem from './OverviewPanelItem';
import FormModal from '../forms/FormModal';

import GroupsList from '../groups/GroupsList';
import PeopleList from '../people/PeopleList';
import RolesList from '../roles/RolesList';
import TabsetsList from '../tabsets/TabsetsList';

import GroupsForm from '../groups/GroupsForm';
import PeopleForm from '../people/PeopleForm';
import RolesForm from '../roles/RolesForm';
import TabsetsForm from '../tabsets/TabsetsForm';

import TabsetsListNotifs from '../tabsets/notifs/TabsetsListNotifs';
import PeopleListNotifs from '../people/notifs/PeopleListNotifs';
import GroupsListNotifs from '../groups/notifs/GroupsListNotifs';
import RolesListNotifs from '../roles/notifs/RolesListNotifs';


///
// View
///

class OverviewPanelView extends Component {
	///
	// Processing
	///

	getItems() {
		return [
			{
				name: 'tabsets',
				title: 'TabSets',
				modalTitle: 'Add a TabSet',
				list: TabsetsList,
				form: TabsetsForm,
				notifications: <TabsetsListNotifs />,
				icon: <TabSetsLogo />
			},
			{
				name: 'people',
				title: 'Friends',
				modalTitle: 'Invite a Friend',
				list: PeopleList,
				form: PeopleForm,
				notifications: <PeopleListNotifs />,
				icon: 'user-circle',
			},
			{
				name: 'groups',
				title: 'Groups',
				modalTitle: 'Add a Group',
				list: GroupsList,
				form: GroupsForm,
				notifications: <GroupsListNotifs />,
				icon: 'id-card',
			},
			{
				name: 'roles',
				title: 'Roles',
				modalTitle: 'Add a Role',
				list: RolesList,
				form: RolesForm,
				notifications: <RolesListNotifs />,
				icon: 'user-secret',
			},
		];
	}

	getExpandedCount() {
		const overview = this.props.overview;
		const selected = overview.getIn(['root', 'selected']);
		return overview.get('panels').reduce((reducer, panel, name) => {
			if(name === selected) {
				return reducer + 1;
			}
			if(panel.get('isExpanded')) {
				return reducer + 1;
			}
			return reducer;
		}, 0);
	}


	///
	// Rendering
	///

	renderItems(items) {
		return items.map((item) => (
			<OverviewPanelItem
				name={item.name}
				title={item.title}
				key={item.name}
				icon={item.icon}
				notifications={item.notifications}
			>
				{React.createElement(item.list, {})}
			</OverviewPanelItem>
		));
	}

	renderFormModals(items) {
		return items.map((item) => (
			<FormModal
				name={item.name}
				title={item.modalTitle}
				form={item.form}
				key={item.name}
			/>
		));
	}

	render() {
		const items = this.getItems();
		const className = classNames(
			'overview-panel',
			'panel-height-' + this.getExpandedCount()
		);

		return (
			<div className={className}>
				{this.renderItems(items)}
				{this.renderFormModals(items)}
			</div>
		);
	}
}

OverviewPanelView.propTypes = {
	overview: types.Overview.isRequired,
};

export { OverviewPanelView };


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

export default connector(OverviewPanelView);

