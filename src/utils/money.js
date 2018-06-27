import numeral from 'numeral';

export const parseToCents = (x) => {
  const negReplaced = x.replace('(', '-').replace(')', '');
  const parsed = numeral(negReplaced);

  return parsed.value() * 100;
};
