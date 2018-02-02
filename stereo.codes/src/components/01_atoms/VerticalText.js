import React from 'react';
import styled from 'styled-components';

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
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(90deg);
`;

const VerticalText = (props) => (
  <VerticalTextStyled className="vertical-text grid-col-2">
    <VerticalTextWrapStyled className="vertical-text-wrap">
      { props.children }
    </VerticalTextWrapStyled>
  </VerticalTextStyled>
)

export default VerticalText;
