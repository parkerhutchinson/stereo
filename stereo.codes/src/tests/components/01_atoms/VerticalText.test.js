import React from 'react';
import { shallow } from 'enzyme';
import VerticalText from '../../../components/01_atoms/VerticalText';


describe('<VerticalText />', () => {
  it('renders the component', () => {
    const wrapper = shallow(
      <VerticalText>
        <h2>hello world</h2>
      </VerticalText>
    );
    expect(wrapper.find('h2').length).toBe(1);

  });
});
