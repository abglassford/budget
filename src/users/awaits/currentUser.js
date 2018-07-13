export const getCurrentUserId = () =>
  () => window.localStorage.getItem('userId');
