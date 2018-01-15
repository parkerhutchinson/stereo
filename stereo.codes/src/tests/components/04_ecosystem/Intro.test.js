import React from 'react';
import { mount, shallow } from 'enzyme';
import Intro from '../../../components/04_ecosystem/Intro';
import { MockProvider } from '../../../scripts-lib/MockProvider';


describe('<Intro />', () => {
  const wrapper = mount(
    <MockProvider>
      <Intro />
    </MockProvider>
  );
  it('should mount', () => {
    expect(wrapper.find(Intro)).toHaveLength(1);
  });
});
