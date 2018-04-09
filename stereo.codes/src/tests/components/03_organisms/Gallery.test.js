import React from 'react';
import { MockProvider } from '../../../lib/MockProvider';
import Gallery from '../../../components/03_organisms/Gallery';
import { mount } from 'enzyme';

describe('<Gallery />', () => {
  const wrapper = mount(
    <MockProvider>
      <Gallery />
    </MockProvider>
  );
  it('should render', () => {
    expect(wrapper.find(Gallery).exists()).toBe(true);
  });
});
