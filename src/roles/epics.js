
import axios from 'axios';
import { Observable } from 'rxjs';
import * as actions from './actions';

const retrieveRolesList = (action$, store) => (
	action$.ofType(actions.FETCH_ROLES_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.fromPromise(axios.get('/data/roles.json'))
				.map(payload => ({
					type: actions.FETCH_ROLES_FULFILLED,
					payload
				}))
		))
);

export default retrieveRolesList;

