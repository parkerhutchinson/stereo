import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../../../components/01_atoms/Logo';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import stereoApp from '../../../reducers/stereo-reducers';

const stereoStore = createStore(stereoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

describe('<Logo />', () => {
  it('should mount', () => {
    const wrapper = shallow(
      <Provider store={stereoStore}>
        <Logo />
      </Provider>
    ).dive();
    expect(wrapper).toHaveLength(1);
  });
});
