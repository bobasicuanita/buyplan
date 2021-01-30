import {getDataPending, getDataSuccess, getDataFailure} from './data.actions';

export const asyncGetData = () => {
    return async dispatch => {
        try {
            dispatch(getDataPending());

            const response = await fetch('/api/data.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })

            const dbData = await response.json();

            dispatch(getDataSuccess(dbData.data))

            return dbData.data;
        } catch (err) {
            dispatch(getDataFailure(err));
        }
    }
}