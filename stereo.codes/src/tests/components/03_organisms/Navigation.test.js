import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount} from 'enzyme';
import Navigation from '../../../components/03_organisms/Navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import stereoApp from '../../../reducers/stereo-reducers';

const stereoStore = createStore(stereoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

describe('<Navigation />', () => {
  // it('should mount', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<Navigation />, div);
  // });

  it('renders all nav links', () => {
    const wrapper = shallow(
      <Provider store={stereoStore}>
        <Navigation />
      </Provider>
    ).dive();
    expect(wrapper.find('Logo').length).toEqual(1);
    expect(wrapper.find('ul NavLink').length).toEqual(6);
  });
});
