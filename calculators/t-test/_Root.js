import React from 'react';
import {
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  Button
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Step from './Step';
import CalculatorError from './components/CalculatorError';
import Link from 'next/link';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// Calculator is basically a multi-step form. You take input from user and make some calculation on submit.
// Than you display results

const useStyles = makeStyles(theme => ({
  calculatorTitle: {
    marginBottom: '0px'
  }
}));

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
  componentDidUpdate(prevProps) {
    if (prevProps.step !== this.props.step) {
      console.log(this.props.step);
    }
  }

  render() {
    const classes = useStyles();
    return (
      <>
        <Container fixed>
          <Card>
            <CardContent>
              <Box mb={4}>
                {this.props.step === 'intro' ? (
                  <Link href="/calculators">
                    <Button
                      variant="text"
                      color="primary"
                      startIcon={<ChevronLeftIcon></ChevronLeftIcon>}
                    >
                      Nazaj na seznam
                    </Button>
                  </Link>
                ) : (
                  <Link href="/calculators/t-test/intro">
                    <Button
                      variant="text"
                      color="primary"
                      startIcon={<ChevronLeftIcon></ChevronLeftIcon>}
                    >
                      Na začetek
                    </Button>
                  </Link>
                )}
                <Typography
                  variant="h3"
                  align="left"
                  className={classes.calculatorTitle}
                >
                  Studentov t-test kalkulator
                </Typography>
                <Typography variant="overline">
                  {
                    this.props.calculatorState.steps.find(
                      step => step.name === this.props.step
                    ).subtitle
                  }
                </Typography>

                <Box mt={2}>
                  <Step step={this.props.step}></Step>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Container>

        <Container fixed>
          <CalculatorError
            text={this.props.calculatorState.error.text}
            type={this.props.calculatorState.error.type}
          ></CalculatorError>
        </Container>
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
