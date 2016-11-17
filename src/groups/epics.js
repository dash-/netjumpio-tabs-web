
import axios from 'axios';
import { Observable } from 'rxjs';
import * as actions from './actions';

const getGroupsList = (action$, store) => (
	action$.ofType(actions.GET_GROUPS_LIST_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.fromPromise(axios.get('/data/groups.json'))
				.map(payload => ({
					type: actions.GET_GROUPS_LIST_FULFILLED,
					payload
				}))
		))
);

export default getGroupsList;

