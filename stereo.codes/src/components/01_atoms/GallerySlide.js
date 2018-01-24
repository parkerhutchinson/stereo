import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class GallerySlide extends Component {
  getClasses(index) {
    switch(index) {
      case 0:
        return 'current';
      case 1:
        return 'next';
      case 2:
        return 'last';
      default:
        return '';
    }
  }
  render() {
    const { image, currentIndex } = this.props;
    const styles = {
      backgroundImage: `url(${image})`,
    };
    return(
      <div
        className={`slide ${this.getClasses(currentIndex)}`}
        style={styles}
      ></div>
    )
  }
}

GallerySlide.propTypes = {
  currentIndex: PropTypes.number,
  image: PropTypes.string
}
