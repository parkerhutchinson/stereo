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
    const timer = setInterval(() => this.nextSlide(), 1500);
    this.setState(
      {
        timer,
      }
    );
  }
  nextSlide() {
    const { images } = this.props;
    const { slide } = this.state;
    const newSlideIndex = slide + 1 >= images.length ? 0 : slide + 1;
    this.setState(
      {
        slide: newSlideIndex,
      }
    );
  }
  getSlides(thisIndex) {
    return this.props.images.map((item, i) => {
        if (i == 1 || i == 2 || i == 3) {
          return (<GallerySlide image={item.image} currentIndex={i} key={i}/>)
        }

        return (<GallerySlide image={item.image} currentIndex={0} key={i}/>)

      }
    )
  }
  render() {
    const {
      classes,
    } = this.props;
    return (
      <aside className={`${classes} gallery`}>
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
