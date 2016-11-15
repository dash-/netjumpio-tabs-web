
import axios from 'axios';
import { Observable } from 'rxjs';
import * as actions from './actions';

const retrieveUsersList = (action$, store) => (
	action$.ofType(actions.FETCH_USERS_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.fromPromise(axios.get('/data/users.json'))
				.map(payload => ({
					type: actions.FETCH_USERS_FULFILLED,
					payload
				}))
		))
);

export default retrieveUsersList;

