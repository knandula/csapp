import { all } from 'redux-saga/effects';
import sidebar from '../components/SideNav/sidebar.saga';
import login from '../components/Login/login.saga';
import dashboard from '../components/Dashboard/dashboard.saga';


export default function* rootSaga() {
    yield all([
        login(),
        sidebar(),
        dashboard(),
    ]);
}
