import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export const createStore = () => {
    let store = null;
    if(process.env.NODE_ENV !== 'production') {
        store = configureStore({
            reducer: rootReducer,
            middleware: [
                ...getDefaultMiddleware({
                    serializableCheck: false,
                }),
                sagaMiddleware,
            ],
        });
    } else {
        store = configureStore({
            reducer: rootReducer,
            middleware: [
                ...getDefaultMiddleware({
                    serializableCheck: false,
                }),
                sagaMiddleware
            ],
        });
    }

    sagaMiddleware.run(rootSaga);
    return store;
};
