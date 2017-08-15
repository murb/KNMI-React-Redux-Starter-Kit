import React, { Component } from 'react';
import PropTypes from 'prop-types';
import countActions from '../actions/countActions'

import { connect } from 'react-redux';

class CounterComponent extends Component {
  render () {
    const { count, dispatch } = this.props;
    return (
      <div>
        <div className="promote">
        <p>{count}</p>
        </div>
        <button className="small button" id='incrementButton' onClick={() => dispatch(countActions.incrementCounter())}>Increment</button>
        <button className="small button" id='doubleButton' onClick={() => dispatch(countActions.doubleCounter())}>Double</button>
      </div>);
  }
}

function mapStateToProps(state) {
  return { count: state.countState.count }
}

CounterComponent.propTypes = {
  count: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(CounterComponent);
