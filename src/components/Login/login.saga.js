import {call, put, takeLatest} from 'redux-saga/effects';

import {
    forgotPassword,
    forgotPasswordError,
    forgotPasswordSuccess,
    getApplicantProfile,
    getApplicantProfileError,
    getApplicantProfileSuccess,
    getMe,
    getMeError,
    getMeSuccess,
    getProfile,
    getProfileError,
    getProfileSuccess,
    login,
    loginError,
    loginSuccess,
    resetPassword,
    resetPasswordError,
    resetPasswordSuccess,
    setLoggedUser
} from './login.slice';
import service from './login.services';
import {restClient} from '../../services/httpClient';

export function* handleLogin(payload) {
    try {
        const _result = yield call(service.login, payload.payload);

        const {data} = _result;
        if(data) {
            yield put(loginSuccess(data));
            localStorage.setItem('AuthToken', data.token);
            localStorage.setItem('stream_access_token', data.stream_access_token);

            restClient.defaults.headers.common.Authorization = `Bearer ${data.token}`;

            const result = yield call(service.getMe);

            if(result && result.data) {
                localStorage.setItem('loggedInUser', JSON.stringify(result.data));
                yield put(setLoggedUser(result.data));
            }
        } else {
            yield put(loginError(_result));
        }
    } catch(error) {
        yield put(loginError(error));
    }
}

export function* handleForgotPassword(action) {
    const {data, error} = yield call(service.forgotPassword, action.payload);

    if(data) {
        yield put(forgotPasswordSuccess(data));
    } else {
        yield put(forgotPasswordError(error));
    }
}

export function* handleResetPassword(action) {
    const {data, error} = yield call(service.resetPassword, action.payload);

    if(data) {
        yield put(resetPasswordSuccess(data));
    } else {
        yield put(resetPasswordError(error));
    }
}

export function* handleGetMe() {
    const {data, error} = yield call(service.getMe);

    if(data) {
        localStorage.setItem('loggedInUser', JSON.stringify(data));
        yield put(getMeSuccess(data));
    } else {
        yield put(getMeError(error));
    }
}

export function* handleGetProfile(action) {
    const {data, error} = yield call(service.getProfile, action.payload);

    if(data) {
        yield put(getProfileSuccess(data));
    } else {
        yield put(getProfileError(error));
    }
}

export function* handleGetApplicantProfile(action) {
    const {data, error} = yield call(service.getProfile, action.payload);

    if(data) {
        yield put(getApplicantProfileSuccess(data));
    } else {
        yield put(getApplicantProfileError(error));
    }
}

export default function* watchLogin() {
    yield takeLatest(login, handleLogin);

    yield takeLatest(forgotPassword.type, handleForgotPassword);

    yield takeLatest(resetPassword.type, handleResetPassword);

    yield takeLatest(getMe.type, handleGetMe);

    yield takeLatest(getProfile.type, handleGetProfile);
    yield takeLatest(getApplicantProfile.type, handleGetApplicantProfile);
}
