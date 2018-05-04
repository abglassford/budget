import { jsonResponse } from './utils/response';

export const handler = (event, _, callback) => {
  console.log(event);
  callback(null, jsonResponse({
    status: 'OK',
  }));
};
