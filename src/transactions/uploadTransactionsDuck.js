import { createAction } from 'redux-actions';
import update from 'immutability-helper';
const SET_UPLOAD_DATA = '@@uploadTransactions/SET_UPLOAD_DATA';

export const setUploadData = createAction(SET_UPLOAD_DATA);

const initialState = {
  uploadData: {
    header: [],
    body: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_UPLOAD_DATA: {
      return update(state, {
        uploadData: {
          header: { $set: action.payload.header },
          body: { $set: action.payload.body },
        }
      });
    }
    default:
      return state;
  }
};
