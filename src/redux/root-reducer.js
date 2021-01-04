import { combineReducers } from 'redux';
import tableReducer from './table/table.reducer';

const rootReducer = combineReducers({
    table: tableReducer
})

export default rootReducer;