import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Intro from './Intro';
import Calculation from './Calculation';

class Step extends Component {
  static propTypes = {
    step: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.step === this.props.step) return;
  }

  getStepComponent() {
    switch (this.props.step) {
      case 'intro':
        return <Intro></Intro>;
      case 'calculation':
        return <Calculation></Calculation>;
      default:
        return <Intro></Intro>;
    }
  }

  render() {
    return this.getStepComponent();
  }
}

export default Step;
