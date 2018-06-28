import { jsonResponse } from './response';

export const handleMethod = (method, handler) =>
  (event, _, callback) => {

    if (event.httpMethod === 'OPTIONS') {
       callback(null, jsonResponse(null));
    }

    if (event.httpMethod === method) {
      handler(event).then(data => {
       callback(null, jsonResponse(data));
      });
    }
  };
