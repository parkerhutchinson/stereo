import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const VerticalText = (props) => (
  <VerticalTextStyled className={`vertical-text grid-col-2`}>
    <VerticalTextWrapStyled className={`${props.inview ? 'active' : ''} vertical-text-wrap`}>
      { props.children }
    </VerticalTextWrapStyled>
  </VerticalTextStyled>
)

VerticalText.propTypes = {
  inview: PropTypes.bool,
}

VerticalText.defaultProps = {
  inview: false,
}

const VerticalTextStyled = styled.aside`
  white-space: nowrap;
  position: relative;
  display: inline-block;
  *{
    display: inline-block;
    text-transform: uppercase;
  }
  h4{
    letter-spacing: 8px;
    font-size: 2.0rem;
    opacity: .6;
    margin-right: 90px;
  }
  p{
    position: relative;
    bottom: 2px;
    letter-spacing: 2px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const VerticalTextWrapStyled = styled.div`
  float: left;
  left: 50%;
  position: absolute;
  margin-top: 100px;
  left: 50%;
  opacity: 0;
  transform: translateX(-50%) translateY(-50%) rotate(90deg);
  transition: all var(--fastanimation) 1.2s;
  &.active{
    margin-top: 0px;
    opacity: 1;
  }
`;

export default VerticalText;
