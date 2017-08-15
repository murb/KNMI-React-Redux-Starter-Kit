import React, { Component } from 'react';
import '../../styles/core.scss';
import MainComponent from '../../components/MainComponent';
import CounterComponent from '../../components/CounterComponent';

import { Route, Link } from 'react-router-dom';

class BaseLayout extends Component {
  render () {
    return (
      <div>
        <header className="row">
          <div className="large-12 columns">
            <img src="/logo-nl.png" className="logo" />
            <ul className="user-area menu">
              <li><a href="/inloggen"><span>Log in</span></a></li>
            </ul>
          </div>
          <div className="top-bar">
            <div className="menu-text"><span>KNMI Project</span></div>
            <nav>
              <ul className="menu">
                <li><Link to='/' className="active">Home</Link></li>
                <li><Link to='/counter'>Counter</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="row columns">
          <h1>KNMI React Redux Starter Kit</h1>

          <div className='page-layout__viewport'>
            <Route exact path="/" component={MainComponent}/>
            <Route path="/counter" component={CounterComponent}/>
          </div>
        </div>
      </div>
    );
  }
}

export default BaseLayout;
