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
        entities,
        result,
      } = normalizr.normalize(
        action.payload.data,
        action.payload.schema,
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
