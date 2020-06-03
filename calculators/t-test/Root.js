import React from 'react';
import { Typography, Box, Container, Card, CardContent, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Step from './Step';
import CalculatorError from './components/CalculatorError';
import LinkButton from '../../components/LinkButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// Calculator is basically a multi-step form. You take input from user and make some calculation on submit.
// Than you display results

const useStyles = makeStyles(theme => ({
  calculatorTitle: {
    marginBottom: '0px'
  }
}));

function RootFunctional(props) {
  const classes = useStyles();
  return (
    <>
      <Container fixed disableGutters>
        <Card>
          <CardContent>
            <Box>
              {props.step === 'intro' ? (
                <Button
                  component={LinkButton}
                  href="/kalkulatorji"
                  variant="text"
                  color="primary"
                  startIcon={<ChevronLeftIcon></ChevronLeftIcon>}
                >
                  Nazaj na seznam
                </Button>
              ) : (
                <Button
                  component={LinkButton}
                  href="/kalkulatorji/[name]/[step]"
                  as="/kalkulatorji/t-test/intro"
                  variant="text"
                  color="primary"
                  startIcon={<ChevronLeftIcon></ChevronLeftIcon>}
                >
                  Na začetek
                </Button>
              )}
              <Typography variant="h3" align="left" className={classes.calculatorTitle}>
                Studentov t-test kalkulator
              </Typography>
              <Typography variant="overline">
                {props.calculatorState.steps.find(step => step.name === props.step).subtitle}
              </Typography>

              <Box mt={3}>
                <Step step={props.step}></Step>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>

      <Container fixed>
        <CalculatorError
          text={props.calculatorState.error.text}
          type={props.calculatorState.error.type}
        ></CalculatorError>
      </Container>
    </>
  );
}

RootFunctional.propTypes = {
  step: PropTypes.string
};

RootFunctional.defaultProps = {
  step: 'intro'
};

const mapStateToProps = state => {
  return {
    calculatorState: state.calculators['t-test']
  };
};

export default connect(mapStateToProps)(RootFunctional);
