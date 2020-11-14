import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import AppRouter from './routers';

const App = ({ store }) => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
