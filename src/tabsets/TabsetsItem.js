///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/lib/Button';

import AuxData from '../forms/AuxData';
import Icon from '../elements/Icon';
import TabSetsLogo from '../elements/TabSetsLogo';
import ItemPanel from '../elements/ItemPanel';
import ItemPanelHeader from '../elements/ItemPanelHeader';
import ItemPanelNotifications from '../elements/ItemPanelNotifications';
import ItemPanelSection from '../elements/ItemPanelSection';
import SectionHeader from '../elements/SectionHeader';
import SectionBody from '../elements/SectionBody';
import TabsForm from '../tabs/TabsForm';
import TabsFormModal from '../tabs/TabsFormModal';
import TabsList from '../tabs/TabsList';
import TabsUrlForm from '../tabs/TabsUrlForm';
import TabRemovedNotif from '../tabs/TabRemovedNotif';
import TabsetLink from './TabsetLink';

import * as actions from './actions';


///
// View
///

class TabsetsItemView extends Component {
	///
	// Hooks
	///
	componentWillMount() {
		this.props.getItem(this.props.params.id);
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.params.id !== nextProps.params.id) {
			nextProps.getItem(nextProps.params.id);
		}
	}


	///
	// Rendering
	///

	renderHeader() {
		const defaultLogoIcon = (
			<TabSetsLogo />
		);

		return (
			<ItemPanelHeader
				item={this.props.item}
				category="TabSet"
				defaultLogoIcon={defaultLogoIcon}
			>
				<TabsetLink tabset={this.props.item}>
					<Button>
						<Icon name="arrow-right" />
						&nbsp;Open
					</Button>
				</TabsetLink>
				<Button>
					<Icon name="share-alt" />
				</Button>
			</ItemPanelHeader>
		);
	}

	renderNotifications() {
		return (
			<ItemPanelNotifications>
				<TabRemovedNotif />
			</ItemPanelNotifications>
		);
	}

	renderTabsSection() {
		let tabs = [];
		const item = this.props.item;

		if(item && item.get && item.get('tabs')) {
			tabs = item.get('tabs');
		}

		return (
			<ItemPanelSection>
				<SectionHeader>Tabs</SectionHeader>
				<SectionBody>
					<TabsList tabs={tabs} />
					<TabsUrlForm>
						<AuxData name="tabsetId" value={this.props.params.id} />
					</TabsUrlForm>
					<TabsFormModal>
						<TabsForm>
							<AuxData name="tabsetId" value={this.props.params.id} />
						</TabsForm>
					</TabsFormModal>
				</SectionBody>
			</ItemPanelSection>
		);
	}

	render() {
		return (
			<ItemPanel className="tabsets-item-panel" item={this.props.item}>
				{this.renderHeader()}
				{this.renderNotifications()}
				{this.renderTabsSection()}
			</ItemPanel>
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
	return {
		item: state.get('tabsets').get('item'),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getItem: (id) => dispatch(actions.getItem(id)),
	};
}

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connector(TabsetsItemView);

