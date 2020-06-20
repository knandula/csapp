import {call, put, takeLatest} from 'redux-saga/effects';

import {surveySideNav, surveySideNavError, surveySideNavSuccess} from './sidebar.slice';

import service from './sidebar.service';

export function* handleSidebar() {
    const {data, error} = yield call(service.surveysSideNav);

    if(data) {
        yield put(surveySideNavSuccess(data));
    } else {
        yield put(surveySideNavError(error));
    }
}


export default function* watchTasks() {
    yield takeLatest(surveySideNav.type, handleSidebar);
}
