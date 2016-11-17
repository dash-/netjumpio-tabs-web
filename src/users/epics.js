
import axios from 'axios';
import { Observable } from 'rxjs';
import * as actions from './actions';

const getUsersList = (action$, store) => (
	action$.ofType(actions.GET_USERS_LIST_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.fromPromise(axios.get('/data/users.json'))
				.map(payload => ({
					type: actions.GET_USERS_LIST_FULFILLED,
					payload
				}))
		))
);

export default getUsersList;

