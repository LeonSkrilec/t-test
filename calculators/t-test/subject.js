import React, { Component } from 'react';
import {
  Grid,
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Box
} from '@material-ui/core';

export default class subject extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event, radioName) {
    const value = event.target.value;
    const newCalculatorState = {
      ...this.props.calculator,
      number_of_samples: value
    };
    this.props.updateCalculatorData(newCalculatorState);
  }
  handleSubmit() {
    console.log('check data and go next');
    this.props.nextStep();
  }
  render() {
    return (
      <Container maxWidth="sm">
        <Box my={6}>
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
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Dva vzorca"
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
                    value={this.props.calculator.difference_between}
                  >
                    <FormControlLabel
                      value="means"
                      control={<Radio />}
                      label="Razlika povprečji"
                    />
                    <FormControlLabel
                      value="proportions"
                      control={<Radio />}
                      label="Razlika deležev"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={3}
              alignItems="center"
              justify="center"
              style={{ marginTop: '20px' }}
            >
              <Grid item xs={2}>
                <Button onClick={this.props.prevStep}>Nazaj</Button>
              </Grid>
              <Grid item xs={2}>
                <Button
                  onClick={this.handleSubmit}
                  variant="contained"
                  color="primary"
                >
                  Naprej
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    );
  }
}
