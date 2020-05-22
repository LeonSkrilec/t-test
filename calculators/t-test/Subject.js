import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Container, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Box } from '@material-ui/core';
import {
  setNumberOfSamples,
  setCalculationSubject,
  setOptions,
  setCalculatorError,
  setStepCompleted
} from '../../store/calculators/t-test/actionCreators';

import PageControls from './components/PageControls';
import { changeCalculatorStep } from '../../support/routing';

class Subject extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = event => {
    const { value, name } = event.target;
    // setNumberOfSamples and setCalculationSubject are dipsatch methods connected to REDUX.
    // They are defined at the bottom with redux connect() function
    // On value change we dispatch an action to REDUX store which will trigger a reducer and update value in the application state
    if (name === 'number_of_samples') this.props.setNumberOfSamples(parseInt(value));
    else if (name === 'proportions_or_means') this.props.setCalculationSubject(value);
    else if (name === 'equal_variances') this.props.setOptions({ equal_variances: value == 'true' });
  };
  previousClickHandler = () => {
    changeCalculatorStep('t-test', 'intro');
  };
  nextClickHandler = () => {
    // Data validation.
    // We check if REDUX data store is filled with required values.
    if (
      [1, 2].includes(this.props.number_of_samples) &&
      ['means', 'proportions'].includes(this.props.proportions_or_means)
    ) {
      // Data is valid. Proceed to next route
      this.props.setCalculatorError({ type: '', text: '' });
      this.props.setStepCompleted({ name: 'subject' });
      return changeCalculatorStep('t-test', 'data');
    } else {
      // Set error in REDUX store
      this.props.setCalculatorError({
        type: 'form_invalid',
        text: 'Predno nadaljujete izberite vrednosti.'
      });
    }
  };

  render() {
    return (
      <Container maxWidth="sm">
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <FormControl>
                <FormLabel style={{ marginBottom: '15px' }}>Število vzorcev</FormLabel>
                <RadioGroup
                  aria-label="number-of-samples"
                  name="number_of_samples"
                  onChange={e => this.handleChange(e)}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="En vzorec"
                    checked={this.props.number_of_samples === 1}
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Dva vzorca"
                    checked={this.props.number_of_samples === 2}
                  />
                </RadioGroup>
              </FormControl>
              {this.props.number_of_samples === 2 && (
                <Box mt={3}>
                  <FormControl>
                    <FormLabel style={{ marginBottom: '15px' }}>Sta populacijski varianci enaki?</FormLabel>
                    <RadioGroup
                      aria-label="equality-of-variances"
                      name="equal_variances"
                      onChange={e => this.handleChange(e)}
                      value={this.props.options.equal_variances}
                    >
                      <FormControlLabel value={true} control={<Radio />} label="Varianci sta enaki" />
                      <FormControlLabel value={false} control={<Radio />} label="Varianci nista enaki (Welch t-test)" />
                    </RadioGroup>
                  </FormControl>
                </Box>
              )}
            </Grid>
            <Grid item sm={6}>
              <FormControl>
                <FormLabel style={{ marginBottom: '15px' }}>Primerjava povprečji ali deležev?</FormLabel>
                <RadioGroup
                  aria-label="difference-of-proportions-or-means"
                  name="proportions_or_means"
                  onChange={e => this.handleChange(e)}
                >
                  <FormControlLabel
                    value="means"
                    control={<Radio />}
                    label="Razlika povprečji"
                    checked={this.props.proportions_or_means === 'means'}
                  />
                  <FormControlLabel
                    value="proportions"
                    control={<Radio />}
                    label="Razlika deležev"
                    checked={this.props.proportions_or_means === 'proportions'}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          <PageControls
            nextText="naprej"
            previousPage="nazaj"
            nextClickHandler={this.nextClickHandler}
            previousClickHandler={this.previousClickHandler}
          ></PageControls>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    number_of_samples: state.calculators['t-test'].number_of_samples,
    proportions_or_means: state.calculators['t-test'].proportions_or_means,
    error: state.calculators['t-test'].error,
    options: state.calculators['t-test'].options
  };
};

const mapDispatchToProps = {
  setNumberOfSamples,
  setCalculationSubject,
  setOptions,
  setCalculatorError,
  setStepCompleted
};

export default connect(mapStateToProps, mapDispatchToProps)(Subject);
