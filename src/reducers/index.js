import pagesReducer  from './pages';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    pages : pagesReducer
});

export default allReducers;