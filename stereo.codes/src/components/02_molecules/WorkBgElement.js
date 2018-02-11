import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const WorkBgElement = (props) => {
  const StyledBgWorkElement = styled.div`
    position: relative;
    &:before{
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background: none;
      border: 10px solid var(--radish);
    }
    .bg-work-image{
      position: absolute;
      top: 0;
      left: 10%;
      width: 89%;
      height: 100%;
      background-image: url(${props.image});
      background-repeat: no-repeat;
      background-size: contain;
    }
  `;
  return(
    <StyledBgWorkElement className="grid-col-6">
      <div className="bg-work-image"></div>
    </StyledBgWorkElement>
  )
}

WorkBgElement.propTypes = {
  image: PropTypes.string,
}

WorkBgElement.defaultProps = {
  image: '',
}

export default WorkBgElement;
