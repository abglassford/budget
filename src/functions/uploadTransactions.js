import mongoose from './utils/db';
import { handleMethod } from './utils/handler';

export const handler = handleMethod('POST', async (event) => {
  return {
    status: 'OK',
  };
});
