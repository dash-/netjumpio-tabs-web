
import axios from 'axios';
import { Observable } from 'rxjs';
import * as actions from './actions';

const retrieveGroupsList = (action$, store) => (
	action$.ofType(actions.FETCH_GROUPS_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.fromPromise(axios.get('/data/groups.json'))
				.map(payload => ({
					type: actions.FETCH_GROUPS_FULFILLED,
					payload
				}))
		))
);

export default retrieveGroupsList;

