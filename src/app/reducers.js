
import TabsetReducers from '../tabset/TabsetReducers';
import { combineReducers } from 'redux-immutable';

const reducers = {
	directives: TabsetReducers,
};

export default combineReducers(reducers);

