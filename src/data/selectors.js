import { createSelector } from 'reselect';
import * as R from 'ramda';

const getSchemaKey = (schema) =>
  Array.isArray(schema)
    ? schema[0].key
    : schema.key;

export const getDataSelector = () =>
  R.prop('data');

export const getResultSelector = (resultKey) =>
  createSelector(
    getDataSelector(),
    R.pathOr(null, ['results', resultKey]),
  );

export const getEntitiesSelector = (schema) =>
  createSelector(
    getDataSelector(),
    R.pathOr(null, ['entities', getSchemaKey(schema)])
  );

export const getResultEntitiesSelector = (resultKey, schema) =>
  createSelector(
    getResultSelector(resultKey),
    getEntitiesSelector(schema),
    (result, entities) => {
      if (Array.isArray(schema)) {
        if (!result) return [];
        return result.map(id => entities[id]);
      }
      if (!result) return null;
      return entities[result];
    }
  );
