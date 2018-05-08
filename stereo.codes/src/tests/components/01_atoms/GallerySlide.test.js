import React from 'react';
import { mount } from 'enzyme';
import GallerySlide from '../../../components/01_atoms/GallerySlide';
import sinon from 'sinon';

describe('<GallerySlide />', () => {
  const props = {
    index: 2,
    image: "hello_world.jpg",
  }
  const spyGetClasses = sinon.spy(GallerySlide.prototype, 'getClasses');
  const wrapper = mount(<GallerySlide image={props.image} currentIndex={props.index}/>);
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should call getClasses on currentIndex update', () => {
    wrapper.setProps({ currentIndex: 3 });
    expect(spyGetClasses.calledOnce).toBe(true);
    sinon.restore();
  });
  it('should have an image path', () => {
    expect(wrapper.props().image).toEqual(props.image);
  });
  it('should have a current index', () => {
    expect(wrapper.props().currentIndex).toEqual(3);
  });
});
