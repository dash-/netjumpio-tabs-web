///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as urlUtils from '../lib/urlUtils';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import Button from 'react-bootstrap/lib/Button';

import Form from '../forms/Form';
import FormControl from '../forms/FormControl';
import AuxData from '../forms/AuxData';
import Icon from '../elements/Icon';
import TabSetsLogo from '../elements/TabSetsLogo';
import ItemPanel from '../elements/ItemPanel';
import ItemPanelHeader from '../elements/ItemPanelHeader';
import CardsList from '../elements/CardsList';
import CardsListItem from '../elements/CardsListItem';
import CardsListCategory from '../elements/CardsListCategory';
import NoWrapEllipse from '../elements/NoWrapEllipse';
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

	renderTabsListItems() {
		return this.props.item.get('tabs').map((tab, key) => (
			<CardsListItem
				item={this.processTabForCLItem(tab)}
				defaultLogoIcon="link"
				key={key}
				horizontal
			>
				<NoWrapEllipse>
					{this.processTabUrlForDisplay(tab.get('url'))}
				</NoWrapEllipse>
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

	render() {
		let tabsListItems = '';

		const item = this.props.item;
		if(item && item.get && item.get('tabs')) {
			tabsListItems = this.renderTabsListItems();
		}

		return (
			<ItemPanel className="tabsets-item-panel" item={this.props.item}>
				{this.renderHeader()}
				<CardsList theme="dark" className="tabsets-list">
					<CardsListCategory
						name="Tabs (Websites)"
					>
						{tabsListItems}
					</CardsListCategory>
				</CardsList>
				{this.renderTabsAddForm()}
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

