import { createSelector } from 'reselect';

const selectTable = state => state.table;

export const selectBasicTotal = createSelector(
    [selectTable],
    table => table.basicTotal
);

export const selectAdvancedTotal = createSelector(
    [selectTable],
    table => table.advancedTotal
);

export const selectPremiumTotal = createSelector(
    [selectTable],
    table => table.premiumTotal
);

export const selectPremiumTwoTotal = createSelector(
    [selectTable],
    table => table.premiumTwoTotal
);

export const selectLuxuryTotal = createSelector(
    [selectTable],
    table => table.luxuryTotal
);

export const selectLuxuryTwoTotal = createSelector(
    [selectTable],
    table => table.luxuryTwoTotal
);