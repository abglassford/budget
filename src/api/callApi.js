const API_BASE = process.env.REACT_APP_FUNCTIONS_BASE_URL || '';

export default (apiAction, dispatch, getState) =>
  fetch(`${API_BASE}${apiAction.url}`, {
    method: apiAction.method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: apiAction.body ? JSON.stringify(apiAction.body) : null,
  })
  .then(response => response.json());

