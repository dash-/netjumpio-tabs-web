
import axios from 'axios';
import { Observable } from 'rxjs';
import * as actions from './actions';

const retrieveOrgsList = (action$, store) => (
	action$.ofType(actions.RETRIEVE_ORGS_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.fromPromise(axios.get('/data/orgs.json'))
				.map(payload => ({
					type: actions.RETRIEVE_ORGS_FULFILLED,
					payload
				}))
		))
);

export default retrieveOrgsList;

