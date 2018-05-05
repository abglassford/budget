import * as R from 'ramda';
import { createSelector } from 'reselect';

export const makeBaseSelector = () => R.prop('uploadTransactions');

export const makeUploadDataSelector = () =>
  createSelector(
    makeBaseSelector(),
    R.prop('uploadData'),
  );
