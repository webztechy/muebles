import { pagesReducer, isloggedinReducer }  from './pages';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    pages : pagesReducer,
    isloggedin : isloggedinReducer
});

export default allReducers;