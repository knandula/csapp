import {call, put, takeLatest} from 'redux-saga/effects';

import service from './dashboard.services';
import {fetch, fetchError, fetchSuccess} from './dashboard.slice';

// ------ Handlers --------
export function* handleDashboardFetch() {
    const {data, error} = yield call(service.get);
    if(data) {
        yield put(fetchSuccess(data));
    } else {
        yield put(fetchError(error));
    }
}

export default function* watchDashboard() {
    yield takeLatest(fetch.type, handleDashboardFetch);
}
