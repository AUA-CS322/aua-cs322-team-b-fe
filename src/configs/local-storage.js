export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const { accessToken } = state;
    if (!accessToken) {
      return;
    }
    const currentState = loadState() || {};
    const serializedState = JSON.stringify({
      ...currentState,
      accessToken,
    });
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // ignore errors
  }
};

export const emptyTokenState = () => {
  try {
    const currentState = loadState() || {};
    const serializedState = JSON.stringify({
      ...currentState,
      accessToken: null,
    });
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // ignore errors
  }
};

export const emptyState = () => {
  localStorage.setItem('state', null);
};

// TODO: to be changed accordingly
export const getAccessToken = () => {
  const state = loadState();
  return (state && state.accessToken) || '';
};
