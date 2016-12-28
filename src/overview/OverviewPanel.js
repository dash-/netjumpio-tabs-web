///
// Dependencies
///

import React, { Component } from 'react';

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

import TabsetsListNotifs from '../tabsets/TabsetsListNotifs';
import PeopleListNotifs from '../people/PeopleListNotifs';
import GroupsListNotifs from '../groups/GroupsListNotifs';
import RolesListNotifs from '../roles/RolesListNotifs';

///
// View
///

class OverviewPanelView extends Component {
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

		return (
			<div className="overview-panel">
				{this.renderItems(items)}
				{this.renderFormModals(items)}
			</div>
		);
	}
}

export default OverviewPanelView;

