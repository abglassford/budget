import * as R from 'ramda';
import parse from 'csv-parse';
import * as uploadTransactionsActions from './uploadTransactionsDuck';

const readFile = (file) =>
  new Promise((res, rej) => {
    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = (evt) => {
      res(evt.target.result);
    };

    reader.onError = rej;
  });

const parseCSV = data =>
  new Promise((res, rej) => {
    parse(data, {}, (err, output) => {
      if (err) {
        rej(err);
        return;
      }
      res(output);
    });
  });

export const uploadTransactions = (file) =>
  async (dispatch, _, callApi) => {
    const csv = await readFile(file);
    const output = await parseCSV(csv);

    dispatch(uploadTransactionsActions.setUploadData({
      header: R.head(output),
      body: R.tail(output),
    }));
  };
