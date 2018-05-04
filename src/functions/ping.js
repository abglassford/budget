import { jsonResponse } from './utils/response';

export const handler = (event, context, callback) => {
  callback(null, jsonResponse({
    status: 'OK',
  }));
};
