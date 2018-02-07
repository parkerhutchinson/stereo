import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';


export default class CopyHeader extends Component {
  componentWillMount() {
    this.setState({
      gridSpan: this.props.grid - 1,
    })
  }
  getSubHeader() {
    const markup = this.props.subTitle ?
    (<h3 className={`grid-col-${this.state.gridSpan}`}>{this.props.subTitle}</h3>) : null;
    return markup;
  }
  render() {
    return (
      <StyledCopyHeader
        className={`${this.props.classes} grid-${this.props.grid} copy-header grid-col-${this.props.grid}`}
      >
        <span className="grid-col-1"></span>
        <div className={`grid-col-${this.state.gridSpan}`} >
          <h1>{ this.props.title }</h1>
          { this.getSubHeader() }
        </div>
      </StyledCopyHeader>
    )
  }
}

CopyHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  classes: PropTypes.string,
  grid: PropTypes.number
}

CopyHeader.defaultProps = {
  title: '',
  classes: '',
  grid: 8,
}

const StyledCopyHeader = styled.header`
  display: grid;
  align-items: stretch;
  margin-bottom: 40px;
  h1{
    margin-bottom: 20px;
  }
  span{
    &:before{
      content: '';
      display: block;
      position: relative;
      width: 70%;
      height: 1px;
      background: var(--radish);
      top: 40px;
    }
  }
`;
