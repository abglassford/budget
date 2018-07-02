import * as dateFns from 'date-fns';

export const formatForDisplay = (x) => {
  return dateFns.format(x, 'M/D/YYYY');
};

