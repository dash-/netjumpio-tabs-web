
import { combineReducers } from 'redux-immutable';
import overview from '../overview/reducers';
import forms from '../forms/reducers';
import directives from '../dirs/reducers';

const reducers = {
	overview,
	forms,
	directives,
};

export default combineReducers(reducers);

