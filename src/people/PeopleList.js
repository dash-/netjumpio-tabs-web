///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardsList from '../elements/CardsList';
import PeopleListItem from './PeopleListItem';
import * as actions from './actions';


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
			<CardsList theme="dark" className="people-list">
				{this.renderPeople(this.props.people)}
			</CardsList>
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
	return {
		people: state.get('people'),
	};
}

function mapDispatchToProps(dispatch) {
  return {
		getList: () => dispatch(actions.getList()),
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(PeopleListView);

