import { createAction } from 'redux-actions';
export const HOME = '@@navigation/HOME';
export const DASHBOARD = '@@navigation/DASHBOARD';
export const BUDGET = '@@navigation/BUDGET';
export const TRANSACTIONS = '@@navigation/TRANSACTIONS';
export const ACCOUNTS = '@@navigation/ACCOUNTS';
export const USER_SETTINGS = '@@navigation/USER_SETTINGS';

export const home = createAction(HOME);
export const dashboard = createAction(DASHBOARD);
export const budget = createAction(BUDGET);
export const transactions = createAction(TRANSACTIONS);
export const accounts = createAction(ACCOUNTS);
export const userSettings = createAction(USER_SETTINGS);
