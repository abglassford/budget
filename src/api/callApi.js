const API_BASE = process.env.REACT_APP_API_BASE || '';

const processBody = (data) => {
  if (!data) return null;

  if (data instanceof FormData) {
    return data;
  }

  return JSON.stringify(data);
};

export default (apiAction, dispatch, getState) => {
  const options = {
    method: apiAction.method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: processBody(apiAction.body),
  };

  console.log(options);

  return fetch(`${API_BASE}${apiAction.url}`, options)
    .then(response => response.json())
    .catch((e) => console.error(e));
};
