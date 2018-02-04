import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import GallerySlide from '../01_atoms/GallerySlide';
import { connect } from 'react-redux';

const StyledGallery = styled.aside`
  position: relative;
  display: block;
  align-items: stretch;
  background: white;
  height: 400px;
  padding: 20px;
`;

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
      if (ReactDOM.findDOMNode(this.refs.gallery).querySelector('.out')) {
        ReactDOM.findDOMNode(this.refs.gallery).querySelector('.out').classList.remove('out');
      }
      clearTimeout(timer);
    }, 700);

    this.setState({ slide: newSlideIndex, });
  }

  getSlides(slide) {
    const { images } = this.props;
    const imagesLength = images.length - 1;

    const slideNext = (slide) => {
      if (slide + 1 > imagesLength) {
        return 0;
      } else {
        return slide + 1;
      }
    }

    const slideLast = (slide) => {
      if (slide + 2 > imagesLength) {
        if (slide + 2 > images.length) {
          return 1;
        }
        return 0;
      } else {
        return slide + 2;
      }
    }
    // TODO: this sucks up performance so much
    // set image props based on slide index
    const markup = images.map((item, i) => {
        if (i === slide) {
          return (<GallerySlide image={item.image} slideState={1} key={i}/>);
        }
        if (i === slideNext(slide)) {
          return (<GallerySlide image={item.image} slideState={2} key={i}/>);
        }
        if (i === slideLast(slide)) {
          return (<GallerySlide image={item.image} slideState={3} key={i}/>);
        }
        return (<GallerySlide image={item.image} slideState={4} key={i}/>);
      }
    );

    return markup;
  }

  render() {
    const { classes } = this.props;
    return (
      <StyledGallery className={`${classes} gallery grid-col-6`} ref="gallery">
        { this.getSlides(this.state.slide) }
      </StyledGallery>
    );
  }
}

Gallery.propTypes = {
  classes: PropTypes.string,
  images: PropTypes.array,
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
