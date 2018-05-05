import * as R from 'ramda';
import { createSelector } from 'reselect';
import { initialMeta } from '../application/metaDuck';

export const makeBaseSelector = () => R.prop('meta');

export const makeMetaSelector = (key) =>
  createSelector(
    makeBaseSelector(),
    R.propOr(initialMeta, key),
  );

export const makeStatusSelector = (key) =>
  createSelector(
    makeMetaSelector(key),
    R.prop('status'),
  );
