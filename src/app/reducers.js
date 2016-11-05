
import { combineReducers } from 'redux-immutable';
import directiveReducers from '../directive/reducers';

const reducers = {
	directives: directiveReducers,
};

export default combineReducers(reducers);

