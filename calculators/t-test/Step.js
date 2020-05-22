import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCalculatorStep } from '../../support/routing';
import Intro from './Intro';
import Subject from './Subject';
import Data from './Data';
import Results from './Results';

class Step extends Component {
  static propTypes = {
    step: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    // But we should check if we have required data in redux store to be on that page.
    // Because steps in calculator are inter-dependent. Some steps rely on others for data.
    // That is why we have to check which steps have been completed and redirect to appropriate step.

    // How to properly check which step to render?
    // Loop through calculator steps in redux store until requested step.
    // If every step until requested one is completed --> render requested step's component
    // Otherwise route to first uncompleted step

    this.state = {
      shouldRender: false
    };
  }

  componentDidMount() {
    this.checkStep();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.step === this.props.step) return;

    this.checkStep();
  }

  // This function checks if all steps before requested step have been completed
  // Loop through calculator steps in redux store until requested step.
  // If every step until requested one is completed --> render requested step's component
  // Otherwise route to first uncompleted step
  checkStep() {
    const stepToRender = this.getStepToRender({
      allSteps: this.props.calculatorSteps,
      requestedStep: this.props.step
    });

    // console.log('requested step', this.props.step);
    // console.log('step to render', stepToRender);

    if (stepToRender.name !== this.props.step) {
      changeCalculatorStep('t-test', stepToRender.name);
    } else {
      // All steps before requested steps have been completed.
      // Render requested step
      this.setState({ shouldRender: true });
    }
  }

  getStepToRender({ requestedStep, allSteps }) {
    for (const stepName in allSteps) {
      const step = allSteps[stepName];
      if (!step.completed) return step;
      else if (step.name === requestedStep) return step;
      else continue;
    }
  }

  getStepComponent() {
    switch (this.props.step) {
      case 'intro':
        return <Intro></Intro>;
      case 'subject':
        return <Subject></Subject>;
      case 'data':
        return <Data></Data>;
      case 'results':
        return <Results></Results>;
      default:
        return <Intro></Intro>;
    }
  }

  render() {
    return this.state.shouldRender ? this.getStepComponent() : null;
  }
}

const mapStateToProps = state => {
  return {
    calculatorSteps: state.calculators['t-test'].steps
  };
};

export default connect(mapStateToProps)(Step);
