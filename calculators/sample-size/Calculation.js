import React from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import PageControls from '../components/PageControls';
import { changeCalculatorStep } from '../../support/routing';
import Confidence from './fields/Confidence';
import Population from './fields/Population';
import ErrorMargin from './fields/ErrorMargin';

class Calculation extends React.Component {
  constructor(props) {
    super(props);

    this.confidenceZmap = {
      0.95: 1.96,
      0.8: 1.28,
      0.85: 1.44,
      0.9: 1.65,
      0.99: 2.58
    };

    this.state = {
      data: {
        population: null,
        confidence: 0.95,
        error: null
      },
      sampleSize: 0
    };
  }

  handleChange = event => {
    let { type, value, id } = event.target;

    if (!id) id = 'confidence';

    let updatedData = { ...this.state.data };
    updatedData[id] = parseFloat(value);

    this.setState(
      {
        data: {
          ...updatedData
        }
      },
      this.isAbleToCalculate
    );
  };

  isAbleToCalculate() {
    const { population, confidence, error } = this.state.data;
    if (!population || !confidence || !error) return this.reset();
    if (!isNaN(population) && !isNaN(confidence) && !isNaN(error)) this.calculate(population, confidence, error);
    else this.reset();
  }

  reset() {
    this.setState({ sampleSize: 0 });
  }

  calculate(population, confidence, error) {
    console.log('make calculation');
    if (!this.confidenceZmap[confidence]) throw new Error('Provide z score for ' + confidence + ' confidence.');
    const errorDecimal = error / 100;
    const p = 0.5;
    const q = 1 - p;
    const SE = errorDecimal / this.confidenceZmap[confidence];
    console.log(SE);
    const n = (p * q) / Math.pow(SE, 2);
    console.log(n);
    const nCorrected = Math.ceil((population * n) / (population + n));
    this.setState({ sampleSize: nCorrected });
  }

  getField(name, column) {
    return this.state.fields.find(field => field.name === name && field.column == column);
  }

  render() {
    return (
      <Container>
        <Box mt={4}>
          <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
            <Grid container spacing={3} alignItems="flex-start">
              <Grid item sm={6}>
                <Typography variant="h5">Izpolni spodnja polja </Typography>
                <Population onChange={this.handleChange.bind(this)}></Population>
                <ErrorMargin onChange={this.handleChange.bind(this)}></ErrorMargin>
                <Confidence onChange={this.handleChange.bind(this)} value={this.state.data.confidence}></Confidence>
              </Grid>
              <Grid item sm={6}>
                <Typography variant="h5">Velikost vzorca</Typography>
                <Typography variant="h3">{this.state.sampleSize}</Typography>
              </Grid>
            </Grid>

            <PageControls
              previous={false}
              nextText="Na začetek"
              nextClickHandler={() => changeCalculatorStep('velikost-vzorca', 'intro')}
            ></PageControls>
          </form>
        </Box>
      </Container>
    );
  }
}

export default Calculation;
