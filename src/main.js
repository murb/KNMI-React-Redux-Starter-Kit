import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/createStore';
import AppContainer from './containers/AppContainer';

// ========================================================
// Store Instantiation
// ========================================================
const initialState = {
  countState: {
    count: 0
  }
};

const store = createStore(initialState, __DEV__);
// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <AppContainer store={store} />,
    MOUNT_NODE
  );
};

// This code is excluded from production bundle
if (__DEV__ && module.hot) {
  // Development render functions
  const renderApp = render;
  const renderError = (error) => {
    const RedBox = require('redbox-react').default;

    ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
  };

  // Wrap render in try/catch
  render = () => {
    try {
      renderApp();
    } catch (error) {
      console.error(error);
      renderError(error);
    }
  };
}

// ========================================================
// Go!
// ========================================================
render();
