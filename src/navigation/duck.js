import { createAction } from 'redux-actions';
export const HOME = '@@navigation/HOME';
export const DASHBOARD = '@@navigation/DASHBOARD';
export const BUDGET = '@@navigation/BUDGET';
export const TRANSACTIONS = '@@navigation/TRANSACTIONS';

export const home = createAction(HOME);
export const dashboard = createAction(DASHBOARD);
export const budget = createAction(BUDGET);
export const transactions = createAction(TRANSACTIONS);
