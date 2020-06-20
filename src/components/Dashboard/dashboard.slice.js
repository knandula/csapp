import {createSlice} from '@reduxjs/toolkit';

let initialState = {
    loading: false,
    error: null,
    dashboard: null
};

const dashboardSlice = createSlice({
        name: 'dashboards',
        initialState,
        reducers: {
            fetch(state) {
                state.loading = true;
            },
            fetchSuccess(state, action) {
                state.loading = false;
                state.dashboard = action.payload;
            },
            fetchError(state, action) {
                state.loading = false;
                state.error = action.payload;
            },
            reset(state) {
                state.dashboard = null;
            }
        }
    })
;


const {actions, reducer} = dashboardSlice;

export const {
    fetch,
    fetchSuccess,
    fetchError,
    reset
} = actions;

export default reducer;
