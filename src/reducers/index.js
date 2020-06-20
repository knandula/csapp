import { combineReducers } from 'redux-immutable';

import loginReducer from '../components/Login/login.slice';

const rootReducer = combineReducers({
    login: loginReducer,
});

export default rootReducer;
