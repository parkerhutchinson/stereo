import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'prop-types';
import GallerySlide from '../01_atoms/GallerySlide';
import { connect } from 'react-redux';

class Gallery extends Component {
  state = {
    play: false,
    slide: 0,
  }
  componentDidMount() {
    const timer = setInterval(() => this.nextSlide(), 2500);
    this.setState(
      {
        timer,
        slide: 0,
      }
    );
  }
  nextSlide() {
    const { images } = this.props;
    const { slide } = this.state;
    const newSlideIndex = slide + 1 > images.length - 1 ? 0 : slide + 1;
    setTimeout(() => {
      document.querySelector('.out').classList.remove('out');
    }, 700);
    this.setState(
      {
        slide: newSlideIndex,
      }
    );
  }
  getSlides(slide) {
    const { images } = this.props;
    const slideNext = (slide) => {
      if (slide + 1 > images.length - 1) {
        if (slide + 1 > images.length) {
          return 1;
        }
        return 0;
      } else {
        return slide + 1;
      }
    }
    const slideLast = (slide) => {
      if (slide + 2 > images.length - 1) {
        if (slide + 2 > images.length) {
          return 1;
        }
        return 0;

      } else {
        return slide + 2;
      }
    }
    return images.map((item, i) => {
        if (i === slide) {
          return (<GallerySlide image={item.image} currentIndex={1} key={i}/>)
        }
        if (i === slideNext(slide)) {
          return (<GallerySlide image={item.image} currentIndex={2} key={i}/>)
        }
        if (i === slideLast(slide)) {
          return (<GallerySlide image={item.image} currentIndex={3} key={i}/>)
        }
        return (<GallerySlide image={item.image} currentIndex={4} key={i}/>)

      }
    )
  }
  render() {
    const {
      classes,
    } = this.props;
    return (
      <aside className={`${classes} gallery`} ref="gallery">
        <h2 style={{position: 'relative', zIndex: 100}}>{this.state.slide}</h2>
        {this.getSlides(this.state.slide)}
      </aside>
    )
  }
}

Gallery.propTypes = {
  classes: PropTypes.string
}

Gallery.defaultProps = {
  classes: '',
}

const mapStateToProps = (state) => {
  return {
    images: state.gallery,
  }
}

export default connect(
  mapStateToProps,
  null
)(Gallery)
