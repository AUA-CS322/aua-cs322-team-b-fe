import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import appState from '../reducers';
import rootSaga from '../sagas';
import { saveState } from './local-storage';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = createStore(
    appState,
    {},
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  store.subscribe(() => {
    const state = store.getState() || {};
    saveState(state.entities || {});
  });

  sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);
  return store;
};

export default configureStore();
