import { jsonResponse } from './utils/response';
import mongoose from './utils/db';

export const handler = (event, _, callback) => {
  console.log(event.body);

  callback(null, jsonResponse({
    status: 'OK',
  }));
};
