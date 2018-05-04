export const uploadTransactions = (file) =>
  async (dispatch, _, callApi) => {
    const data = new FormData();
    data.append('file', file);

    callApi({
      method: 'POST',
      url: '/uploadTransactions',
      body: data,
    });
  };
