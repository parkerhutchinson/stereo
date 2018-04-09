import React from 'react';
import { mount } from 'enzyme';
import Work from '../../../components/04_ecosystem/Work.js';
import { MockProvider } from '../../../lib/MockProvider';

describe('<Work >', () => {
  const wrapper = mount(
    <MockProvider>
      <Work />
    </MockProvider>
  );
  it('should render', () => {
    expect(wrapper).toHaveLength(1);
  });
});
