///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as urlUtils from '../lib/urlUtils';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import Button from 'react-bootstrap/lib/Button';

import Form from '../forms/Form';
import FormModal from '../forms/FormModal';
import FormControl from '../forms/FormControl';
import AuxData from '../forms/AuxData';
import Icon from '../elements/Icon';
import TabSetsLogo from '../elements/TabSetsLogo';
import ItemPanel from '../elements/ItemPanel';
import ItemPanelHeader from '../elements/ItemPanelHeader';
import ItemPanelNotifications from '../elements/ItemPanelNotifications';
import ItemPanelSection from '../elements/ItemPanelSection';
import SectionHeader from '../elements/SectionHeader';
import SectionBody from '../elements/SectionBody';
import CardsList from '../elements/CardsList';
import CardsListItem from '../elements/CardsListItem';
import NoWrapEllipse from '../elements/NoWrapEllipse';
import ButtonsList from '../elements/ButtonsList';
import ButtonsListMenu from '../elements/ButtonsListMenu';
import ButtonsListMenuItem from '../elements/ButtonsListMenuItem';
import NotificationsListItem from '../elements/NotificationsListItem';
import NotificationButtons from '../elements/NotificationButtons';
import TabsetLink from './TabsetLink';
import TabsForm from './TabsForm';

import * as actions from './actions';


///
// View
///

class TabsetsItemView extends Component {
	///
	// Hooks
	///
	constructor(props) {
		super(props);

		this.restoreTab = this.restoreTab.bind(this);
		this.renderTabRemovedMessage = this.renderTabRemovedMessage.bind(this);
	}

	componentWillMount() {
		this.props.getItem(this.props.params.id);
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.params.id !== nextProps.params.id) {
			nextProps.getItem(nextProps.params.id);
		}
	}


	///
	// Methods
	///

	processTabForCLItem(tab) {
		return tab.set('href', tab.get('url'));
	}

	processTabUrlForDisplay(url) {
		return urlUtils.stripEndSlash(
			urlUtils.stripWWW(
				urlUtils.stripProtocol(url)
			)
		);
	}

	restoreTab(tab) {
		return () => (
			this.props.restoreTab(tab)
		);
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
				<NotificationsListItem
					type="success"
					triggeredBy={actions.REMOVE_TAB_DONE}
					renderMessage={this.renderTabRemovedMessage}
				/>
			</ItemPanelNotifications>
		);
	}

	renderTabsSection() {
		return (
			<ItemPanelSection>
				<SectionHeader>Tabs</SectionHeader>
				<SectionBody>
					<CardsList className="tabsets-list">
						{this.renderTabsListItems()}
					</CardsList>
					{this.renderTabsAddForm()}
					{this.renderTabsFormModal()}
				</SectionBody>
			</ItemPanelSection>
		);
	}

	renderTabsListItems() {
		const item = this.props.item;
		if(! (item && item.get && item.get('tabs'))) {
			return '';
		}

		return item.get('tabs').map((tab, key) => (
			<CardsListItem
				item={this.processTabForCLItem(tab)}
				defaultLogoIcon="link"
				key={key}
				horizontal
			>
				<NoWrapEllipse>
					{this.processTabUrlForDisplay(tab.get('url'))}
				</NoWrapEllipse>
				<ButtonsList>
					<ButtonsListMenu id="tabsItemMenu">
						<ButtonsListMenuItem
							icon="times"
							title="Delete"
							action={actions.removeTabStart(tab.toJS())}
						/>
						<ButtonsListMenuItem
							icon="pencil"
							title="Edit"
							action={actions.editTabPrompt(tab.toJS())}
						/>
					</ButtonsListMenu>
				</ButtonsList>
			</CardsListItem>
		));
	}

	renderTabsAddForm() {
		return (
			<Form name="tabsetsTabs" className="add-tab-form form-inline">
				<AuxData name="tabsetId" value={this.props.params.id} />
				<FormGroup controlId="websites">
					<InputGroup>
						<InputGroup.Addon>Web Address</InputGroup.Addon>
						<FormControl
							type="text"
							placeholder="http://www.example.com/"
							name="url"
						/>
					</InputGroup>
				</FormGroup>
				<Button bsStyle="primary" type="submit">
					<Icon name="plus" />
				</Button>
			</Form>
		);
	}

	renderTabsFormModal() {
		// TODO Stubbed
		return (
			<FormModal
				name="tabsetsTabsPrompt"
				title="TBD"
				form={TabsForm}
			/>
		);
	}

	renderTabRemovedMessage(notification) {
		const name = notification.trigger.payload.url;
		const tab = notification.trigger.payload;
		return (
			<span>
				Tab "{name}" removed.
				<NotificationButtons>
					<Button
						bsStyle="success"
						onClick={this.restoreTab(tab)}
					>
						Undo
					</Button>
				</NotificationButtons>
			</span>
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
		restoreTab: (tab) => dispatch(actions.restoreTabStart(tab)),
	};
}

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connector(TabsetsItemView);

