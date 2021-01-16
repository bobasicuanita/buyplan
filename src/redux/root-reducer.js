import { combineReducers } from 'redux';
import DataReducer from './data/data.reducer';
import tableReducer from './table/table.reducer';

const rootReducer = combineReducers({
    table: tableReducer,
    data: DataReducer
})

export default rootReducer;