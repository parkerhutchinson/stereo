import React from 'react';
import { shallow } from 'enzyme';
import Copy from '../../../components/03_organisms/Copy';

describe('<CopyHeader />', () => {
  const props = {
    title: 'hello world',
  }
  it('Should render', () => {
    const wrapper = shallow(<Copy title={props.title}/>);
    expect(wrapper).toHaveLength(1);
  });
});
