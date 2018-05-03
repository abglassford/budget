const API_BASE = process.env.API_BASE || '';

export default (apiAction, dispatch, getState) =>
  fetch(`${API_BASE}${apiAction.url}`, {
    method: apiAction.method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: apiAction.body ? JSON.stringify(apiAction.body) : null,
  })
  .then(response => response.json());

