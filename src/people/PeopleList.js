///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as types from './types';

import CardsList from '../elements/CardsList';
import PeopleListItem from './PeopleListItem';


///
// View
///

class PeopleListView extends Component {
	renderPeople(people) {
		return people.map((item, key) => (
			<PeopleListItem item={item} key={key} />
		));
	}

	render() {
		return (
			<CardsList className="people-list">
				{this.renderPeople(this.props.people)}
			</CardsList>
		);
	}
}

PeopleListView.propTypes = {
	people: types.List.isRequired,
};

export { PeopleListView };


///
// Container
///

function mapStateToProps(state) {
	return {
		people: state.get('people'),
	};
}

function mapDispatchToProps(dispatch) {
	return {};
}

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connector(PeopleListView);

