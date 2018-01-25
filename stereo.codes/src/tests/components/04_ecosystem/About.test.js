import React from 'react';
import { mount } from 'enzyme';
import About from '../../../components/04_ecosystem/About.js';
import { MockProvider } from '../../../scripts-lib/MockProvider';

describe('<About >', () => {
  const wrapper = mount(
    <MockProvider>
      <About />
    </MockProvider>
  );
  it('should render', () => {
    expect(wrapper).toHaveLength(1);
  });
});
