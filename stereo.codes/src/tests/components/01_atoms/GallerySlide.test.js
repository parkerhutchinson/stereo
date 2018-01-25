import React from 'react';
import { mount } from 'enzyme';
import GallerySlide from '../../../components/01_atoms/GallerySlide';

describe('<GallerySlide />', () => {
  const props = {
    index: 2,
    image: "hello_world.jpg",
  }
  const wrapper = mount(<GallerySlide image={props.image} currentIndex={props.index}/>);
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
