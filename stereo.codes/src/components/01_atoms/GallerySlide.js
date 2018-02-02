import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledSlide = styled.div`
  position: absolute;
  top: 0;
  left: 25%;
  height: 100%;
  width: 80%;
  border-radius: 5px;
  overflow: hidden;
  opacity: 0;
  background-size: cover;
  background-position: center;
  transform: scale(.8);
  transition: all .8s;
  z-index: 1;
  pointer-events: none;
  &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    width: 100%;
    opacity: 1;
    background: white;
    transition: all .8s;
  }
  &.out{
    left: -10%;
    opacity: 0;
    z-index: 3;
    transform: scale(1.1);
  }
  &.current{
    left: 0;
    z-index: 3;
    opacity: 1;
    transform: scale(1);
    box-shadow: 10px 10px 30px rgba(0,0,0,.3);
    &:after{ opacity: 0; }
  }
  &.next{
    left: 10%;
    opacity: 1;
    &:after{ opacity: .4; }
    box-shadow: 10px 10px 30px rgba(0,0,0,.1);
    transform: scale(.9);
    z-index: 2;
  }
  &.last{
    left: 20%;
    opacity: 1;
    transform: scale(.8);
    z-index: 0;
    &:after{ opacity: .8; }
  }
`;

export default class GallerySlide extends Component {
  componentDidMount(nextprops) {
    if (this.props.slideState === 4) {
      setTimeout(() => {
        ReactDOM.findDOMNode(this.refs.slide).classList.remove('out');
      }, 200);
    }
  }

  getClasses(index) {
    switch(index) {
      case 1:
        return 'current';
      case 2:
        return 'next';
      case 3:
        return 'last';
      case 4:
        return 'out';
      default:
        return '';
    }
  }

  render() {
    const { image, slideState } = this.props;
    const styles = {
      backgroundImage: `url(${image})`,
    };
    return(
      <StyledSlide
        className={`slide ${this.getClasses(slideState)}`}
        style={styles}
        ref="slide"
      ></StyledSlide>
    )
  }
}

GallerySlide.propTypes = {
  slideState: PropTypes.number,
  image: PropTypes.string
}
