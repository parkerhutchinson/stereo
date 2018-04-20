import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getImages = (images) => {
  return images.map((img, i) => <li key={i}><img src={img} alt={img}/></li>);
}

const HackImageLoader = (props) => {
  const { images } = props;
  return(
    <StyledImageCache>
      { getImages(images) }
    </StyledImageCache>
  );
}

HackImageLoader.propTypes = {
  images: PropTypes.object,
}

HackImageLoader.defaultProps = {
  images: {},
}

export default HackImageLoader;

const StyledImageCache = styled.ul`
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;