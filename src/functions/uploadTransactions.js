import { jsonResponse } from './utils/response';
import qs from 'querystring';

export const handler = (event, _, callback) => {
  console.log(qs.parse(event.body));
  callback(null, jsonResponse({
    status: 'OK',
  }));
};
