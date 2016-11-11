
import { combineReducers } from 'redux-immutable';
import overview from '../overview/reducers';
import directives from '../directive/reducers';

const reducers = {
	overview,
	directives,
};

export default combineReducers(reducers);

