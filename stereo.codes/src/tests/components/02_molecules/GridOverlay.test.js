import React from 'react';
import { shallow, mount } from 'enzyme';
import GridOverlay from '../../../components/02_molecules/GridOverlay';
import { MockProvider } from '../../../lib/MockProvider';

describe("<GridOverlay/>", () => {
  const wrapper = mount(
    <MockProvider>
      <GridOverlay/>
    </MockProvider>
  );
  it("should render", () => {
    expect(wrapper.find(GridOverlay).length).toBe(1);
  });
});