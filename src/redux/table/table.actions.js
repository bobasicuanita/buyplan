import TableActionTypes from './table.types';

export const handleBasicIncrement = value => ({
    type: TableActionTypes.SET_BASIC_INCREMENT,
    payload: value
});

export const handleAdvancedIncrement = value => ({
    type: TableActionTypes.SET_ADVANCED_INCREMENT,
    payload: value
});

export const handlePremiumIncrement = value => ({
    type: TableActionTypes.SET_PREMIUM_INCREMENT,
    payload: value
});

export const handlePremiumTwoIncrement = value => ({
    type: TableActionTypes.SET_PREMIUM_TWO_INCREMENT,
    payload: value
});

export const handleLuxuryIncrement = value => ({
    type: TableActionTypes.SET_LUXURY_INCREMENT,
    payload: value
});

export const handleLuxuryTwoIncrement = value => ({
    type: TableActionTypes.SET_LUXURY_TWO_INCREMENT,
    payload: value
});

export const handleBasicDecrement = value => ({
    type: TableActionTypes.SET_BASIC_DECREMENT,
    payload: value
});

export const handleAdvancedDecrement = value => ({
    type: TableActionTypes.SET_ADVANCED_DECREMENT,
    payload: value
});

export const handlePremiumDecrement = value => ({
    type: TableActionTypes.SET_PREMIUM_DECREMENT,
    payload: value
});

export const handlePremiumTwoDecrement = value => ({
    type: TableActionTypes.SET_PREMIUM_TWO_DECREMENT,
    payload: value
});

export const handleLuxuryDecrement = value => ({
    type: TableActionTypes.SET_LUXURY_DECREMENT,
    payload: value
});

export const handleLuxuryTwoDecrement = value => ({
    type: TableActionTypes.SET_LUXURY_TWO_DECREMENT,
    payload: value
});