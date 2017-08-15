import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import BaseLayout from '../layouts/BaseLayout';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

class AppContainer extends Component {
  render () {
    const { store } = this.props;
    return (
      <Provider store={store} >
        <BrowserRouter>
          <BaseLayout />
        </BrowserRouter>
      </Provider>
    );
  }
}

AppContainer.propTypes = {
  store  : PropTypes.object.isRequired
};

export default AppContainer;
