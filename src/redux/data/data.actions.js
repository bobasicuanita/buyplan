import DataActionTypes from './data.types';

export const handleGetData = data => ({
    type: DataActionTypes.GET_INITIAL_DATA,
    payload: data
});

export const getDataPending = () => {
    return {
        type: DataActionTypes.GET_DATA_PENDING
    }
}

export const getDataSuccess = data => {
    return {
        type: DataActionTypes.GET_DATA_SUCCESS,
        payload: data
    }
}

export const getDataFailure = error => {
    return {
        type: DataActionTypes.GET_DATA_FAILURE,
        payload: error
    }
}