import {createSelector,} from 'reselect';

export const selectConversationList = state => state.conversations;
export const getConversationList = createSelector(
    [selectConversationList],
    conversationList => conversationList
);
