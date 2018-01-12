import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import NavLink from '../../../components/01_atoms/NavLink';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import stereoApp from '../../../reducers/stereo-reducers';

const stereoStore = createStore(stereoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


describe('<NavLink />', () => {
  const props = {
    url: '#test',
    title: 'hello world',
  };
  const wrapper = shallow(
    <Provider store={store}>
      <NavLink url={props.url} title={props.title} />
    </Provider>
  );
  it('should mount', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <NavLink url={props.url} title={props.title}/>
      </Provider>,
      div
    );
  })
  it('displays a title', () => {
    expect(wrapper.text()).toMatch("hello world");
  });
  it('has a href attribute value', () => {
    expect(wrapper.prop('href')).toMatch("#test");
  });
});
