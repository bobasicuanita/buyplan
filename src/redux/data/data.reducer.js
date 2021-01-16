import DataActionTypes from './data.types';

const INITIAL_STATE = {
    pending: false,
    data: [],
    error: null
};

const tableReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DataActionTypes.GET_DATA_PENDING:
            return {...state, pending: true }
        case DataActionTypes.GET_DATA_SUCCESS:
            return {...state, pending: false, data: action.payload }
        case DataActionTypes.GET_DATA_FAILURE:
            return {...state, pending: false, error: action.payload }
        default:
            return state;
    }
}

export default tableReducer;