import {createSlice} from '@reduxjs/toolkit';

let initialState = {
    sidenav: null,
    loading: false,
    error: null,
};

const sidebarSlice = createSlice({
        name: 'sidebar',
        initialState,
        reducers: {
            fetchSidebar: (state) => {
                state.loading = true;
            },
            fetchSidebarSuccess: (state, action) => {
                state.sidenav = action.payload;
                state.loading = false;
            },
            fetchSidebarError: (state, action) => {
                state.error = action.payload;
                state.loading = false;
            },
            surveySideNav(state) {
                state.loading = true;
            },
            surveySideNavSuccess(state, action) {
                state.loading = false;
                state.sidenav = action.payload;
            },
            surveySideNavError(state, action) {
                state.loading = false;
                state.error = action.payload;
            }
        }
    })
;


const {actions, reducer} = sidebarSlice;

export const {
    fetchSidebar,
    fetchSidebarSuccess,
    fetchSidebarError,

    surveySideNav,
    surveySideNavSuccess,
    surveySideNavError
} = actions;

export default reducer;
