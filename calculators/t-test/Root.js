import React from 'react';
import { Typography, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Step from './Step';
import CalculatorError from './components/CalculatorError';
// Calculator is basically a multi-step form. You take input from user and make some calculation on submit.
// Than you display results

class Root extends React.Component {
  static propTypes = {
    step: PropTypes.string
  };

  static defaultProps = {
    step: 'intro'
  };

  constructor(props) {
    super(props);
    // props.page holds page value. And it changes on routing
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Box mb={3}>
          <Typography component="h2" variant="h2" gutterBottom align="center">
            Studentov t-test
          </Typography>
        </Box>

        <Step step={this.props.step}></Step>

        <CalculatorError
          text={this.props.calculatorState.error.text}
          type={this.props.calculatorState.error.type}
        ></CalculatorError>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    calculatorState: state.calculators['t-test']
  };
};

export default connect(mapStateToProps)(Root);
