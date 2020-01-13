import React, { Component } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import {
  Grid,
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box
} from '@material-ui/core';
import {
  setNumberOfSamples,
  setCalculationSubject,
  setCalculatorError
} from '../../store/calculators/t-test/actionCreators';

import PageControls from './components/PageControls';

class Subject extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = event => {
    const { value, name } = event.target;
    // setNumberOfSamples and setCalculationSubject are dipsatch methods connected to REDUX.
    // They are defined at the bottom with redux connect() function
    // On value change we dispatch an action to REDUX store which will trigger a reducer and update value in the application state
    if (name === 'number_of_samples')
      this.props.setNumberOfSamples(parseInt(value));
    else this.props.setCalculationSubject(value);
  };
  previousClickHandler = () => {
    const previousPageName = 'intro';
    Router.push(
      `/calculators/[slug]/[page]`,
      `/calculators/t-test/${previousPageName}`
    );
  };
  nextClickHandler = () => {
    // Data validation.
    if (
      [1, 2].includes(this.props.number_of_samples) &&
      ['means', 'proportions'].includes(this.props.proportions_or_means)
    ) {
      // Data is valid. Proceed to next route
      this.props.setCalculatorError({ type: '', text: '' });
      const nextPageName = 'data';
      return Router.push(
        `/calculators/[slug]/[page]`,
        `/calculators/t-test/${nextPageName}`
      );
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
        <Box mt={6} mb={3}>
          <form noValidate autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <FormControl>
                  <FormLabel style={{ marginBottom: '15px' }}>
                    En ali dva vzorca?
                  </FormLabel>
                  <RadioGroup
                    aria-label="number-of-samples"
                    name="number_of_samples"
                    onChange={e => this.handleChange(e, 'number_of_samples')}
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
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <FormLabel style={{ marginBottom: '15px' }}>
                    Razlika povprečji ali deležev?
                  </FormLabel>
                  <RadioGroup
                    aria-label="difference-of-proportions-or-means"
                    name="difference_between"
                    onChange={this.handleChange}
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
                      checked={
                        this.props.proportions_or_means === 'proportions'
                      }
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
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    number_of_samples: state.calculators['t-test'].number_of_samples,
    proportions_or_means: state.calculators['t-test'].proportions_or_means,
    error: state.calculators['t-test'].error
  };
};

const mapDispatchToProps = {
  setNumberOfSamples,
  setCalculationSubject,
  setCalculatorError
};

export default connect(mapStateToProps, mapDispatchToProps)(Subject);
