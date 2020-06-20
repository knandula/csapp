import {createSelector,} from 'reselect';

export const todos = state => state.getIn(['todo', 'todos']);
export const getTodo = id => createSelector(
    todos,
    (_todos) => _todos.get(id),
);

export const isLoading = state => state.getIn(['todo', 'fetching']);
