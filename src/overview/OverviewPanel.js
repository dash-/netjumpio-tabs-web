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


///
// View
///

class OverviewPanelView extends Component {
	getItems() {
		return [
			{
				name: 'tabsets',
				title: 'TabSets',
				list: TabsetsList,
				form: TabsetsForm,
				icon: <TabSetsLogo />
			},
			{
				name: 'people',
				title: 'Friends',
				list: PeopleList,
				form: PeopleForm,
				icon: 'user-circle',
			},
			{
				name: 'groups',
				title: 'Groups',
				list: GroupsList,
				form: GroupsForm,
				icon: 'id-card',
			},
			{
				name: 'roles',
				title: 'Roles',
				list: RolesList,
				form: RolesForm,
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
			>
				{React.createElement(item.list, {})}
			</OverviewPanelItem>
		));
	}

	renderFormModals(items) {
		return items.map((item) => (
			<FormModal
				name={item.name}
				title={item.title}
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

