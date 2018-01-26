import React from 'react';
import { mount } from 'enzyme';
import { MockProvider } from '../../../scripts-lib/MockProvider';
import WorkFinder from '../../../components/03_organisms/WorkFinder';

describe('<WorkFinder />', () => {
  const wrapper = mount(
    <MockProvider>
      <WorkFinder />
    </MockProvider>
  );
  it('should render', () => {
    expect(wrapper.find(WorkFinder).exists()).toBe(true);
  })
})
