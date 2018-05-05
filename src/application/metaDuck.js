import update from 'immutability-helper';
const SET_STATUS = '@@meta/SET_STATUS';

export const setStatus = (key, status) => ({
  type: SET_STATUS,
  payload: { key, status },
});

export const initialMeta = {
  status: 'NOT_STARTED',
};

const initialState = {
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return update(state, {
        [action.payload.key]: {
          $apply: (meta = initialMeta) =>
            update(meta, {
              status: { $set: action.payload.status }
            }),
        },
      });
    default:
      return state;
  }
};
