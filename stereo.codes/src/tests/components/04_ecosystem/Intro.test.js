import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Intro from '../../../components/04_ecosystem/Intro.js';
import { MockProvider } from '../../../lib/MockProvider';

describe('<Intro >', () => {
  const wrapper = mount(
    <MockProvider>
      <Intro />
    </MockProvider>
  );
  it('should render', () => {
    expect(wrapper).toHaveLength(1);
  });
});
