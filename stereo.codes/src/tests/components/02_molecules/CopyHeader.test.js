import React from 'react';
import { shallow } from 'enzyme';
import CopyHeader from '../../../components/02_molecules/CopyHeader';

describe('<CopyHeader />', () => {
  const props = {
    title: 'hello world',
  }
  it('Should render', () => {
    const wrapper = shallow(<CopyHeader title={props.title} />);
    expect(wrapper).toHaveLength(1);
  });
});
