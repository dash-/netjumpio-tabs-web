///
// Dependencies
///

import React, { Component } from 'react';

import OverviewPanelItem from './OverviewPanelItem';
import FormModal from '../forms/FormModal';

import OrgsList from '../orgs/OrgsList';
import UsersList from '../users/UsersList';
import RolesList from '../roles/RolesList';
import DirsList from '../dirs/DirsList';

import OrgsForm from '../orgs/OrgsForm';
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
				name: 'orgs',
				title: 'Organizations',
				list: OrgsList,
				form: OrgsForm,
			},
			{
				name: 'users',
				title: 'Users',
				list: UsersList,
				form: UsersForm,
			},
			{
				name: 'roles',
				title: 'Roles',
				list: RolesList,
				form: RolesForm,
			},
			{
				name: 'dirs',
				title: 'Directives',
				list: DirsList,
				form: DirsForm,
			},
		];
	}

	renderItems(items) {
		return items.map((item) => {
			const listItem = React.createElement(item.list, {});
			return (
				<OverviewPanelItem
					name={item.name}
					title={item.title}
					key={item.name}
				>
					{listItem}
				</OverviewPanelItem>
			);
		});
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
		const items = this.renderItems(this.getItems());
		const formModals = this.renderFormModals(this.getItems());

		return (
			<div className="overview-panel">
				{items}
				{formModals}
			</div>
		);
	}
}

export default OverviewPanelView;

