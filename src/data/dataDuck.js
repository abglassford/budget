import update from 'immutability-helper';
import * as normalizr from 'normalizr';

const STORE_DATA = '@@data/STORE_DATA';

export const storeData = (data, schema, key) => ({
  type: STORE_DATA,
  payload: {
    data,
    schema,
    key,
  },
});

const initialState = {
  results: {},
  entities: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_DATA: {
      const {
        data,
        schema,
      } = action.payload;

      if (!data || !schema) {
        return state;
      }

      const {
        entities,
        result,
      } = normalizr.normalize(
        data,
        schema,
      );

      return update(state, {
        results: {
          [action.payload.key]: { $set: result },
        },
        entities: {
          $merge: entities,
        }
      });
    }
    default:
      return state;
  }
};
