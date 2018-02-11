import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


export default class GallerySlide extends Component {
  componentDidMount() {
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

  shouldComponentUpdate(newprops) {
    return newprops.slideState !== this.props.slideState;
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
  transform: scale(.8) translate3d(0,0,0);
  transition: all .8s;
  z-index: 1;
  pointer-events: none;
  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 110%;
    width: 110%;
    opacity: 1;
    background: var(--snow);
    transition: all .8s;
  }
  &.out{
    left: -10%;
    opacity: 0;
    z-index: 3;
    transform: scale(1.1) translate3d(0,0,0);
  }
  &.current{
    left: 0;
    z-index: 3;
    opacity: 1;
    transform: scale(1) translate3d(0,0,0);
    box-shadow: 10px 10px 30px rgba(0,0,0,.3);
    &:before{ opacity: 0; }
  }
  &.next{
    left: 10%;
    opacity: 1;
    box-shadow: 10px 10px 30px rgba(0,0,0,.1);
    transform: scale(.9) translate3d(0,0,0);
    z-index: 2;
    &:before{ opacity: .4; }
  }
  &.last{
    left: 20%;
    opacity: 1;
    transform: scale(.8) translate3d(0,0,0);
    z-index: 0;
    &:before{ opacity: .8; }
  }
`;
