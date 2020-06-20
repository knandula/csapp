import {createSelector,} from 'reselect';

export const selectEmployeeList = state => state.employees;
export const getEmployeeList = createSelector(
    [selectEmployeeList],
    employeeList => employeeList
);
