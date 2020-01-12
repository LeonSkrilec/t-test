import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const Intro = dynamic(() => import('./Intro'));
const Settings = dynamic(() => import('./Settings'));
const Results = dynamic(() => import('./Results'));
const Subject = dynamic(() => import('./Subject'));
const Data = dynamic(() => import('./Data'));

export default class Pages extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    page: PropTypes.string
  };

  render() {
    switch (this.props.page) {
      case 'intro':
        return <Intro></Intro>;
      case 'settings':
        return <Settings></Settings>;
      case 'results':
        return <Results></Results>;
      case 'subject':
        return <Subject></Subject>;
      case 'data':
        return <Data></Data>;
      default:
        return <Intro></Intro>;
    }
  }
}
