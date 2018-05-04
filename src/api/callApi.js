const API_BASE = process.env.REACT_APP_FUNCTIONS_BASE_URL || '';

const processBody = (data) => {
  if (!data) return null;

  if (data instanceof FormData) {
    return data;
  }

  return JSON.stringify(data);
};

export default (apiAction, dispatch, getState) =>
  fetch(`${API_BASE}${apiAction.url}`, {
    method: apiAction.method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: processBody(apiAction.body),
  })
  .then(response => response.json());

