import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import GallerySlide from '../01_atoms/GallerySlide';
import { connect } from 'react-redux';

class Gallery extends Component {
  state = {
    play: false,
    slide: 0,
  }
  componentDidMount() {
    const timer = setInterval(() => this.nextSlide(), 3500);
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
    // update slides and setup default slides after
    const timer = setTimeout(() => {
      if (document.querySelector('.out')) {
        document.querySelector('.out').classList.remove('out');
      }

      clearTimeout(timer);
    }, 700);
    this.setState({ slide: newSlideIndex, });
  }
  getSlides(slide) {
    const { images } = this.props;
    const slideNext = (slide) => {
      if (slide + 1 > images.length - 1) {
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

    // set image props based on slide index
    return images.map((item, i) => {
        // set current slide
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
      <aside className={`${classes} gallery grid-col-6`} ref="gallery">
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
