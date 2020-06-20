import {createSlice} from '@reduxjs/toolkit';

let initialState = {
    loading: false,
    error: null,
    forgotPassword: false,
    resetPassword: false,
    isAuthenticated: !!localStorage.getItem('AuthToken') || false,
    loggedInUser: localStorage.getItem('loggedInUser') ? JSON.parse(localStorage.getItem('loggedInUser')) : null,
    profile: null
};

const loginSlice = createSlice({
        name: 'login',
        initialState,
        reducers: {
            login: (state) => {
                state.loading = true;
            },
            loginSuccess: (state) => {
                state.error = null;
                state.loading = false;
                state.isAuthenticated = true;
            },
            loginError: (state, action) => {
                state.error = action.payload;
                state.loading = false;
                state.isAuthenticated = false;
            },
            getMe(state) {
                state.loading = true;
            },
            getMeSuccess(state, action) {
                state.loading = false;
                state.loggedInUser = action.payload;
            },
            getMeError(state, action) {
                state.loading = false;
                state.error = action.payload;
            },
            getProfile(state) {
                state.loading = true;
            },
            resetProfile(state) {
                state.profile = null;
            },
            getProfileSuccess(state, action) {
                state.loading = false;
                state.profile = action.payload;
            },
            getProfileError(state, action) {
                state.loading = false;
                state.error = action.payload;
            },
            getApplicantProfile(state) {
                state.loading = true;
            },
            getApplicantProfileSuccess(state, action) {
                state.loading = false;
                state.applicantProfile = action.payload;
            },
            getApplicantProfileError(state, action) {
                state.loading = false;
                state.error = action.payload;
            },
            forgotPassword: (state) => {
                state.loading = true;
            },
            forgotPasswordSuccess: (state) => {
                state.error = null;
                state.loading = false;
                state.forgotPassword = true;
            },
            forgotPasswordError: (state, action) => {
                state.error = action.payload;
                state.loading = false;
            },
            resetPassword: (state) => {
                state.loading = true;
            },
            resetPasswordSuccess: (state) => {
                state.error = null;
                state.loading = false;
                state.resetPassword = true;
            },
            resetPasswordError: (state, action) => {
                state.error = action.payload;
                state.loading = false;
            },
            setLoggedUser: (state, action) => {
                state.loggedInUser = action.payload;
            },
            logout: (state) => {
                state.isAuthenticated = false;
                state.loggedInUser = null;
                localStorage.removeItem('AuthToken');
                localStorage.removeItem('loggedInUser');
                localStorage.removeItem('stream_access_token');
            }
        }
    })
;


const {actions, reducer} = loginSlice;

export const {
    login,
    loginSuccess,
    loginError,

    getMe,
    getMeSuccess,
    getMeError,

    getProfile,
    resetProfile,
    getProfileSuccess,
    getProfileError,

    getApplicantProfile,
    getApplicantProfileSuccess,
    getApplicantProfileError,

    setLoggedUser,
    logout,

    forgotPassword,
    forgotPasswordSuccess,
    forgotPasswordError,

    resetPassword,
    resetPasswordSuccess,
    resetPasswordError,
} = actions;

export default reducer;
