import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ReactDOM from 'react-dom';

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
      <div
        className={`slide ${this.getClasses(slideState)}`}
        style={styles}
        ref="slide"
      ></div>
    )
  }
}

GallerySlide.propTypes = {
  slideState: PropTypes.number,
  image: PropTypes.string
}
