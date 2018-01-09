import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class SectionObserver extends Component {
  componentWillMount() {
    const config = {
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('inview');
        } else {
          entry.target.classList.remove('inview');
        }
      })
    }, config);
  }
  componentDidMount() {
    console.log(this.observer.observe(this.refs.sectionObserver));
  }
  render() {
    return (
      <section className="observer" ref="sectionObserver">
        hello world
      </section>
    );
  }
}
