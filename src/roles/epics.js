
import axios from 'axios';
import { Observable } from 'rxjs';
import * as actions from './actions';

const getList = (action$, store) => (
	action$.ofType(actions.GET_LIST_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.fromPromise(axios.get('/data/roles.json'))
				.map(payload => ({
					type: actions.GET_LIST_FULFILLED,
					payload
				}))
		))
);

export default getList;

