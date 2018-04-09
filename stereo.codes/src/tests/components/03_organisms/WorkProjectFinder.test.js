import React from 'react';
import { mount } from 'enzyme';
import { MockProvider } from '../../../lib/MockProvider';
import WorkProjectFinder from '../../../components/03_organisms/WorkProjectFinder';

describe('<WorkProjectFinder />', () => {
  const wrapper = mount(
    <MockProvider>
      <WorkProjectFinder />
    </MockProvider>
  );
  it('should render', () => {
    expect(wrapper.find(WorkProjectFinder).exists()).toBe(true);
  })
})
