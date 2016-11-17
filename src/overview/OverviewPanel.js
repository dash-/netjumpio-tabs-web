///
// Dependencies
///

import React, { Component } from 'react';

import TabSetsLogo from '../elements/TabSetsLogo';

import OverviewPanelItem from './OverviewPanelItem';
import FormModal from '../forms/FormModal';

import GroupsList from '../groups/GroupsList';
import UsersList from '../users/UsersList';
import RolesList from '../roles/RolesList';
import DirsList from '../dirs/DirsList';

import GroupsForm from '../groups/GroupsForm';
import UsersForm from '../users/UsersForm';
import RolesForm from '../roles/RolesForm';
import DirsForm from '../dirs/DirsForm';


///
// View
///

class OverviewPanelView extends Component {
	getItems() {
		return [
			{
				name: 'dirs',
				title: 'TabSets',
				list: DirsList,
				form: DirsForm,
				icon: <TabSetsLogo />
			},
			{
				name: 'users',
				title: 'Friends',
				list: UsersList,
				form: UsersForm,
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

