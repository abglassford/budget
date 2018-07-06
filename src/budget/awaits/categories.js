import * as dataActions from '../../data/dataDuck';
import categorySchema from '../schemas/categories';

export const getAllCategories = () =>
  async (dispatch, getState, callApi) => {
    const result = await callApi({
      method: 'GET',
      url: '/categories',
    });

    dispatch(dataActions.storeData(
      result,
      [categorySchema],
      'allCategories',
    ));
  };

export const addCategory = (category) =>
  async (dispatch, getState, callApi) => {
    await callApi({
      method: 'POST',
      url: '/categories',
      body: category,
    });

    dispatch(getAllCategories());
  };
