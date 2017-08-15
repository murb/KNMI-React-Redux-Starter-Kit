import React from 'react';

import CounterComponent from './CounterComponent';
import countActions from '../actions/countActions';

import { mount } from 'enzyme';
import sinon from 'sinon';

describe('(Component) CounterComponent', () => {
  let _component;
  const _store = {
    getState: sinon.stub().returns({
      countState: {
        count: 0
      }
    }),
    dispatch: sinon.stub(),
    subscribe: sinon.stub()
  };
  const incrementFunc = sinon.spy(countActions, 'incrementCounter');

  beforeEach(() => {
    _component = mount(<CounterComponent store={_store} />);
  });

  it('Can mount', () => {
    expect(_component.type()).to.equal(CounterComponent);
  });

  it('Can increment the counter', () => {
    _component.find('#incrementButton').first().simulate('click');
    expect(_store.dispatch).to.have.been.calledOnce();
    expect(incrementFunc).to.have.been.calledOnce();
  });
});
