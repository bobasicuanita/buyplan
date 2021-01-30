import { handleBasicIncrement, handleAdvancedIncrement, handlePremiumIncrement, handlePremiumTwoIncrement, handleLuxuryIncrement, handleLuxuryTwoIncrement, handleBasicDecrement, handleAdvancedDecrement, handlePremiumDecrement, handlePremiumTwoDecrement, handleLuxuryDecrement, handleLuxuryTwoDecrement } from './table.actions';

export const handleBasicTotal = e => {
    return (dispatch, getState) => {

        const getPrice = getState().data.data.find(el => el.id == e.target.dataset.id).price;

        if (e.target.checked) {
            dispatch(handleBasicIncrement(getPrice));
        } else {
            dispatch(handleBasicDecrement(getPrice));
        }
    };
};

export const handleAdvancedTotal = e => {
    return (dispatch, getState) => {
        const getPrice = getState().data.data.find(el => el.id == e.target.dataset.id).price;

        if (e.target.checked) {
            dispatch(handleAdvancedIncrement(getPrice));
        } else {
            dispatch(handleAdvancedDecrement(getPrice));
        }
    };
};

export const handlePremiumTotal = e => {
    return (dispatch, getState) => {
        const getPrice = getState().data.data.find(el => el.id == e.target.dataset.id).price;

        if (e.target.checked) {
            dispatch(handlePremiumIncrement(getPrice));
        } else {
            dispatch(handlePremiumDecrement(getPrice));
        }
    };
};

export const handlePremiumTwoTotal = e => {
    return (dispatch, getState) => {
        const getPrice = getState().data.data.find(el => el.id == e.target.dataset.id).price;

        if (e.target.checked) {
            dispatch(handlePremiumTwoIncrement(getPrice));
        } else {
            dispatch(handlePremiumTwoDecrement(getPrice));
        }
    };
};

export const handleLuxuryTotal = e => {
    return (dispatch, getState) => {
        const getPrice = getState().data.data.find(el => el.id == e.target.dataset.id).price;

        if (e.target.checked) {
            dispatch(handleLuxuryIncrement(getPrice));
        } else {
            dispatch(handleLuxuryDecrement(getPrice));
        }
    };
};

export const handleLuxuryTwoTotal = e => {
    return (dispatch, getState) => {
        const getPrice = getState().data.data.find(el => el.id == e.target.dataset.id).price;

        if (e.target.checked) {
            dispatch(handleLuxuryTwoIncrement(getPrice));
        } else {
            dispatch(handleLuxuryTwoDecrement(getPrice));
        }
    };
};