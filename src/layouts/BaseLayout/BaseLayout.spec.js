import React from 'react';
import { default as BaseLayout } from './BaseLayout';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

const STORE = {
  getState: () => { return { notifications: [] }; },
  subscribe: () => null,
  dispatch: () => null
};

describe('(Layout) BaseLayout', () => {
  it('mounts', () => {
    const _component = mount(<MemoryRouter><BaseLayout /></MemoryRouter>);
    expect(_component.type()).to.eql(MemoryRouter);
  });

  it('Allows for triggering the fullscreen function', () => {
    // const _wrappingComponent = mount(<Provider store={STORE}><BaseLayout routes={[ { title: 'title', path: 'full_screen' } ]} /></Provider>);
    // const evt = new KeyboardEvent('keydown', {
    //   bubbles: true,
    //   cancelable: true,
    //   key: 'F11',
    //   keyCode: 122
    // });
    // expect(_wrappingComponent.find(BaseLayout)).to.have.length(1);
    // _wrappingComponent.find(BaseLayout).get(0).elementToFullScreen(evt);
    // expect('everything').to.be.ok();
  });

  it('Attaches a route based class name', () => {
    const _wrappingComponent = mount(<Provider store={STORE}><MemoryRouter><BaseLayout routes={[ { title: 'title' }, { path: 'layout_test' } ]} /></MemoryRouter></Provider>);
    expect(_wrappingComponent.type()).to.eql(Provider);
    expect(_wrappingComponent.find(BaseLayout)).to.have.length(1);
    // expect(_wrappingComponent.find('.test')).to.have.length(1);
  });
});
