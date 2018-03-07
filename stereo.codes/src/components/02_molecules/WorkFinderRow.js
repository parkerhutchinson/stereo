import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WorkFinderRow = (props) => {
  return (
    <StyledRow
      className={`${props.active ? 'active' : ''} workfinder-row`}
      onMouseOver={() => props.setHover(props)}
      onClick={() => props.setActive(props)}
      na={props.na}
    >
      <dd className="workfinder-row-name">
        <dl>
          <dt>{`${props.date} -`}</dt>
          <dd>{props.name}</dd>
        </dl>
      </dd>
      <dd className="workfinder-row-stack">
        <dl>
          <dd>{props.stack.join(', ')}</dd>
        </dl>
      </dd>
      <dd className="workfinder-row-position">
        <dl>
          <dd>{props.position}</dd>
        </dl>
      </dd>
    </StyledRow>
  )
}

WorkFinderRow.propTypes = {
  id: PropTypes.number,
  date: PropTypes.string,
  name: PropTypes.string,
  stack: PropTypes.array,
  position: PropTypes.string,
  setHover: PropTypes.func,
  setActive: PropTypes.func,
  na: PropTypes.bool,
}

WorkFinderRow.defaultProps = {
  id: 1,
  date: '2018',
  name: 'draftboard',
  stack: ['React', 'CSS3', 'HTML5'],
  position: 'Full Stack',
  na: false,
}

// styled components are lit af.
const naConditionalStyle = (props) => {
  if (!props.na) {
    return `
      cursor: pointer;
      transition-duration: .5s;
      transform: scale(1.05);
      border-color: rgb(var(--radish));
      z-index: 2;
      padding: 0 15px;
      box-shadow: 0 0 30px rgba(0,0,0,.1);
    `;
  }
}

const StyledRow = styled.dl`
  border: 1px solid #fff;
  border-bottom: 1px solid #E4E3E3;
  width: 100%;
  display: flex;
  align-items: center;
  transform: scale(1);
  position: relative;
  z-index: 1;
  padding: 0;
  &.workfinder-row{
    color: ${props => props.na ? 'rgba(44, 46, 71, .35)' : 'rgb(var(--stormy))'};
  }
  .workfinder-row-name{width: 40%;}
  .workfinder-row-stack{width: 40%;}
  .workfinder-row-position{width: 20%;}
  transition: border-color 0s;
  & > dd{
    padding: 15px 0 14px;
  }
  dd{
    display: block;
    text-transform: capitalize;
    font-size: 1.4rem;
    line-height: 1.4;
    dl{
      display: flex;
      align-items: center;

      dt{
        font-weight: bold;
        margin-right: 5px;
      }
    }
  }
  &:hover{
    ${naConditionalStyle}
  }
`;

export default WorkFinderRow;
