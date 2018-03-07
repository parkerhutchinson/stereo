import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const WorkBgElement = (props) => {
  const StyledBgWorkElement = styled.div`
    position: relative;
    width: 100%;
    min-height: 200px;
    margin-bottom: 60px;
    &:before{
      content: '';
      position: absolute;
      top: 10%;
      left: 0;
      display: block;
      width: calc(100% - 10px);
      height: 80%;
      background: none;
      border: 5px solid rgb(var(--radish));
    }
    .bg-work-image{
      position: relative;
      left: 10%;
      width: 80%;
      display: block;
      box-shadow: 10px 10px 30px 0 rgb(var(--stormy));
    }
  `;
  return(
    <StyledBgWorkElement>
      <img className="bg-work-image" src={props.image} alt="bg-element"/>
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
