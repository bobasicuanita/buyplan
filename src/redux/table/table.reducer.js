
import TableActionTypes from './table.types';

const INITIAL_STATE = {
    basicTotal: 0,
    advancedTotal: 0,
    premiumTotal: 0,
    premiumTwoTotal: 0,
    luxuryTotal: 0,
    luxuryTwoTotal: 0,
};

const tableReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TableActionTypes.SET_BASIC_INCREMENT:
            return { ...state, basicTotal: state.basicTotal + action.payload }
        case TableActionTypes.SET_ADVANCED_INCREMENT:
            return { ...state, advancedTotal: state.advancedTotal + action.payload }
        case TableActionTypes.SET_PREMIUM_INCREMENT:
            return { ...state, premiumTotal: state.premiumTotal + action.payload }
        case TableActionTypes.SET_PREMIUM_TWO_INCREMENT:
            return { ...state, premiumTwoTotal: state.premiumTwoTotal + action.payload }
        case TableActionTypes.SET_LUXURY_INCREMENT:
            return { ...state, luxuryTotal: state.luxuryTotal + action.payload }
        case TableActionTypes.SET_LUXURY_TWO_INCREMENT:
            return { ...state, luxuryTwoTotal: state.luxuryTwoTotal + action.payload }
        case TableActionTypes.SET_BASIC_DECREMENT:
            return { ...state, basicTotal: state.basicTotal - action.payload }
        case TableActionTypes.SET_ADVANCED_DECREMENT:
            return { ...state, advancedTotal: state.advancedTotal - action.payload }
        case TableActionTypes.SET_PREMIUM_DECREMENT:
            return { ...state, premiumTotal: state.premiumTotal - action.payload }
        case TableActionTypes.SET_PREMIUM_TWO_DECREMENT:
            return { ...state, premiumTwoTotal: state.premiumTwoTotal - action.payload }
        case TableActionTypes.SET_LUXURY_DECREMENT:
            return { ...state, luxuryTotal: state.luxuryTotal - action.payload }
        case TableActionTypes.SET_LUXURY_TWO_DECREMENT:
            return { ...state, luxuryTwoTotal: state.luxuryTwoTotal - action.payload }
        default:
            return state;
    }
}

export default tableReducer;