import React, { Component } from 'react';
import '../../styles/core.scss';
import MainComponent from '../../components/MainComponent';
import CounterComponent from '../../components/CounterComponent';

import { Route, Link } from 'react-router-dom';

class BaseLayout extends Component {
  render () {
    return (
      <div className='container text-center'>
        <h1>KNMI React Redux Starter Kit</h1>
        <Link to='/'>Home</Link>
        {' · '}
        <Link to='/counter'>Counter</Link>
        <div className='page-layout__viewport'>
          <Route exact path="/" component={MainComponent}/>
          <Route path="/counter" component={CounterComponent}/>
        </div>
      </div>
    );
  }
}

export default BaseLayout;
