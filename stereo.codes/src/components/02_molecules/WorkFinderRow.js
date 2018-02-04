import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WorkFinderRow = (props) => {
  return (
    <StyledRow className="workfinder-row grid-col-14" onMouseOver={() => props.selected(props)}>
      <dd className="workfinder-row-name">
        <dl>
          <dt>{`${props.date} -`}</dt>
          <dd>{props.name}</dd>
        </dl>
      </dd>
      <dd className="workfinder-row-stack">
        <dl>
          <dd>{props.stack}</dd>
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
  selected: PropTypes.func,
}

WorkFinderRow.defaultProps = {
  id: 1,
  date: '2018',
  name: 'draftboard',
  stack: ['React', 'CSS3', 'HTML5'],
  position: 'Full Stack'
}

const StyledRow = styled.dl`
  border: 1px solid #fff;
  border-bottom: 1px solid #E4E3E3;
  width: 100%;
  display: flex;
  align-items: center;
  grid-column-start: 2;
  transform: scale(1);
  position: relative;
  z-index: 1;
  padding: 0;
  cursor: pointer;
  .workfinder-row-name{width: 40%;}
  .workfinder-row-stack{width: 40%;}
  .workfinder-row-position{width: 20%;}
  transition: border-color .8s;
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
        color: var(--stormy);
        font-weight: bold;
        margin-right: 5px;
      }
      dd{
        color: var(--stormy);
      }
    }
  }
  &:hover{
    transform: scale(1.05);
    border-color: var(--radish);
    z-index: 2;
    padding: 0 15px;
    box-shadow: 0 0 30px rgba(0,0,0,.1);
  }
`;

export default WorkFinderRow;
