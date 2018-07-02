import numeral from 'numeral';

export const parseToCents = (x) => {
  const negReplaced = x.replace('(', '-').replace(')', '');
  const parsed = numeral(negReplaced);

  return parsed.value() * 100;
};

export const formatToDollars = (x, locale = 'en-US') => {
  const dollars = Math.abs(x / 100);

  return x < 0 ? `($${dollars})` : `$${dollars}`;
};
