import * as R from 'ramda';
import parse from 'csv-parse';
import * as dateFns from 'date-fns';

import * as moneyUtils from '../../utils/money';

import * as uploadTransactionsActions from '../ducks/uploadTransactions';
import * as metaActions from '../../application/metaDuck';
import * as selectors from '../selectors/uploadTransactions';
import * as dataActions from '../../data/dataDuck';
import transactionSchema from '../schemas/transactions';
import * as currentUserAwaits from '../../users/awaits/currentUser';

const KEY = 'UPLOAD_TRANSACTION';

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

export const parseCSVFile = (file) =>
  async (dispatch, _, callApi) => {
    dispatch(metaActions.setStatus(KEY, 'PENDING'));
    const csv = await readFile(file);
    const output = await parseCSV(csv);

    dispatch(uploadTransactionsActions.setUploadData({
      header: R.head(output),
      body: R.tail(output),
    }));
    dispatch(metaActions.setStatus(KEY, 'SUCCESS'));
  };

const rowToTransaction = (columnData) => (row) => {
  return {
    date: dateFns.parse(row[columnData.date]),
    description: row[columnData.description],
    amount: parseInt(moneyUtils.parseToCents(row[columnData.amount]), 10),
  };
};

export const getAllTransactions = () =>
  async (dispatch, getState, callApi) => {
    const userId = await dispatch(currentUserAwaits.getCurrentUserId());
    const result = await callApi({
      method: 'GET',
      url: `/users/${userId}/transactions`,
    });

    dispatch(dataActions.storeData(
      result,
      [transactionSchema],
      'allTransactions',
    ));
  };

export const uploadTransactions = (columnData) => {
  const uploadDataSelector = selectors.makeUploadDataSelector();
  return async (dispatch, getState, callApi) => {
    const uploadData = uploadDataSelector(getState());
    const transactions = uploadData.body.map(rowToTransaction(columnData));

    const result = await callApi({
      method: 'POST',
      url: '/transactions',
      body: transactions,
    });

    dispatch(dataActions.storeData(
      result,
      [transactionSchema],
      'uploadedTransactions',
    ));

    dispatch(getAllTransactions());
  };
};
