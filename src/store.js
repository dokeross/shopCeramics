import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rooteReducers from './reducers';

export default () => {
    const store = createStore(rooteReducers, applyMiddleware(logger));
    return store;
}