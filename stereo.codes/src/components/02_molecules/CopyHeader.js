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
    const active = this.props.inview ? 'active' : '';

    return (
      <StyledCopyHeader
        className={`${this.props.classes} ${active} grid-${this.props.grid} copy-header grid-col-${this.props.grid}`}
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
  grid: PropTypes.number,
  color: PropTypes.string,
  inview: PropTypes.bool,
}

CopyHeader.defaultProps = {
  title: '',
  classes: '',
  grid: 8,
  inview: false,
  color: 'rgb(var(--snow))',
}

const StyledCopyHeader = styled.header`
  display: grid;
  align-items: stretch;
  margin-bottom: 40px;
  h1{
    position: relative;
    margin-bottom: 20px;
    color: ${props => props.color};
    opacity: 0;
    transform: translateY(50px);
    transition: all var(--fastanimation) .4s;
    transition-delay: 0s;
  }
  h3{
    position: relative;
    opacity: 0;
    transform: translateY(50px);
    transition: all var(--fastanimation) .4s;
    transition-delay: 0s;
  }
  span{
    &:before{
      content: '';
      display: block;
      position: relative;
      width: 0;
      height: 1px;
      background: rgb(var(--radish));
      top: 40px;
      transition: width var(--fastanimation) .4s;
      transition-delay: 0s;
    }
  }
  &.active{
    h1{
      transition-delay: .7s;
      transform: translateY(0px);
      opacity: 1;
    }
    h3{
      opacity: 1;
      transform: translateY(0px);
      transition-delay: .9s;
    }
    span{
      &:before{
        transition-delay: 1s;
        width: 70%;
      }
    }
  }
`;
