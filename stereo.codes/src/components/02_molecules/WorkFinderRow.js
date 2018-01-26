import React from 'react';
import PropTypes from 'prop-types';


const WorkFinderRow = (props) => {
  return (
    <dl className="workfinder-row grid-col-14" onMouseOver={() => props.selected(props)}>
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
    </dl>
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

export default WorkFinderRow;
