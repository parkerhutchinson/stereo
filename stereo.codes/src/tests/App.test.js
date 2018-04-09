import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mount } from 'enzyme';
import { MockProvider } from '../lib/MockProvider';

it('should mount', () => {
  const wrapper = mount(
    <MockProvider>
      <App />
    </MockProvider>
  )
  expect(wrapper.find('App')).toHaveLength(1);
});
