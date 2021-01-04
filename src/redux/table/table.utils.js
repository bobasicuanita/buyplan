import { handleBasicIncrement, handleAdvancedIncrement, handlePremiumIncrement, handlePremiumTwoIncrement, handleLuxuryIncrement, handleLuxuryTwoIncrement, handleBasicDecrement, handleAdvancedDecrement, handlePremiumDecrement, handlePremiumTwoDecrement, handleLuxuryDecrement, handleLuxuryTwoDecrement } from '../../redux/table/table.actions';


export const handleBasicTotal = e => {
    return dispatch => {
        const getPrice = parseInt(e.target.parentElement.parentElement.children[1].innerText.split(' ')[0]);

        if (e.target.checked) {

            dispatch(handleBasicIncrement(getPrice));
        } else {
            dispatch(handleBasicDecrement(getPrice));
        }
    };
};

export const handleAdvancedTotal = e => {
    return dispatch => {
        const getPrice = parseInt(e.target.parentElement.parentElement.children[1].innerText.split(' ')[0]);

        if (e.target.checked) {
            dispatch(handleAdvancedIncrement(getPrice));
        } else {
            dispatch(handleAdvancedDecrement(getPrice));
        }
    };
};

export const handlePremiumTotal = e => {
    return dispatch => {
        const getPrice = parseInt(e.target.parentElement.parentElement.children[1].innerText.split(' ')[0]);

        if (e.target.checked) {
            dispatch(handlePremiumIncrement(getPrice));
        } else {
            dispatch(handlePremiumDecrement(getPrice));
        }
    };
};

export const handlePremiumTwoTotal = e => {
    return dispatch => {
        const getPrice = parseInt(e.target.parentElement.parentElement.children[1].innerText.split(' ')[0]);

        if (e.target.checked) {
            dispatch(handlePremiumTwoIncrement(getPrice));
        } else {
            dispatch(handlePremiumTwoDecrement(getPrice));
        }
    };
};

export const handleLuxuryTotal = e => {
    return dispatch => {
        const getPrice = parseInt(e.target.parentElement.parentElement.children[1].innerText.split(' ')[0]);

        if (e.target.checked) {
            dispatch(handleLuxuryIncrement(getPrice));
        } else {
            dispatch(handleLuxuryDecrement(getPrice));
        }
    };
};

export const handleLuxuryTwoTotal = e => {
    return dispatch => {
        const getPrice = parseInt(e.target.parentElement.parentElement.children[1].innerText.split(' ')[0]);

        if (e.target.checked) {
            dispatch(handleLuxuryTwoIncrement(getPrice));
        } else {
            dispatch(handleLuxuryTwoDecrement(getPrice));
        }
    };
};


