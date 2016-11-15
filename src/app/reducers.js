
import { combineReducers } from 'redux-immutable';
import overview from '../overview/reducers';
import forms from '../forms/reducers';
import orgs from '../orgs/reducers';
import directives from '../dirs/reducers';

const reducers = {
	overview,
	forms,
	orgs,
	directives,
};

export default combineReducers(reducers);

