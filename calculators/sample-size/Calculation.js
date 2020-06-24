import React from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import PageControls from '../components/PageControls';
import { changeCalculatorStep } from '../../support/routing';
import Confidence from './fields/Confidence';
import Population from './fields/Population';
import ProportionErrorMargin from './fields/ProportionErrorMargin';
import EstimatedStatistic from './fields/EstimatedStatistic';
import ErrorType from './fields/ErrorType';
import MeanErrorMargin from './fields/MeanErrorMargin';
import StandardDeviation from './fields/StandardDeviation';
import EstimatedProportion from './fields/EstimatedProportion';
import VariationCoefficient from './fields/VariationCoefficient';

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
    (this.cvs = [0.01, 0.05, 0.1, 0.2, 0.33]),
      (this.state = {
        data: {
          estimatedStatistic: 'proportion', // proportion || mean
          errorType: 'se', // SE - standard error || CV - koeficient variacije
          stddev: 10, // Population standard deviation
          meanError: 1, // Sample variance
          proportionError: 1, // Percent
          estimatedProportion: 25, // Percent
          confidence: 0.95, // Confidence interval
          population: null,
          cv: 0.05
        },
        sampleSize: 0
      });
  }

  componentDidMount() {
    this.isAbleToCalculate();
  }

  handleChange = event => {
    let { name, value } = event.target;
    console.log(name, value);

    let updatedData = { ...this.state.data };
    if (name !== 'estimatedStatistic' && name !== 'errorType') {
      updatedData[name] = parseFloat(value);
    } else {
      updatedData[name] = value;
    }

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
    if (this.state.data.estimatedStatistic === 'mean') {
      const { confidence, meanError, stddev } = this.state.data;
      if (!confidence || !meanError || !stddev) return this.cantCalculate();
      if (isNaN(confidence) || isNaN(meanError) || isNaN(stddev)) return this.cantCalculate();
      return this.calculateMeanSize(confidence, meanError, stddev);
    } else {
      const { confidence, estimatedProportion, proportionError } = this.state.data;
      if (!confidence || !estimatedProportion || !proportionError) return this.cantCalculate();
      if (estimatedProportion < 0 || estimatedProportion > 100) return this.cantCalculate();
      if (proportionError < 0 || proportionError > 100) return this.cantCalculate();
      if (isNaN(confidence) || isNaN(estimatedProportion) || isNaN(proportionError)) return this.cantCalculate();
      return this.calculateProportionSize(confidence, estimatedProportion, proportionError);
    }
  }

  calculateMeanSize(confidence, meanError, stddev) {
    const z = this.confidenceZmap[confidence];
    const n = Math.pow((z * stddev) / meanError, 2);
    this.setState({ sampleSize: Math.round(n) });
  }

  calculateProportionSize(confidence, estimatedProportion, proportionError) {
    const z = this.confidenceZmap[confidence];
    const errorDecimal = proportionError / 100;
    const estimatedDecimal = estimatedProportion / 100;
    const n = (Math.pow(z, 2) * estimatedDecimal * (1 - estimatedDecimal)) / Math.pow(errorDecimal, 2);
    this.setState({ sampleSize: Math.round(n) });
  }

  cantCalculate() {
    this.setState({ sampleSize: 0 });
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
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <EstimatedStatistic
                      onChange={this.handleChange.bind(this)}
                      value={this.state.data.estimatedStatistic}
                    ></EstimatedStatistic>
                  </Grid>
                  <Grid item xs={6}>
                    <ErrorType onChange={this.handleChange.bind(this)} value={this.state.data.errorType}></ErrorType>
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    {this.state.data.estimatedStatistic === 'mean' && this.state.data.errorType === 'se' && (
                      <MeanErrorMargin
                        value={this.state.data.meanError}
                        onChange={this.handleChange.bind(this)}
                      ></MeanErrorMargin>
                    )}{' '}
                    {this.state.data.estimatedStatistic === 'proportion' && this.state.data.errorType === 'se' && (
                      <ProportionErrorMargin
                        value={this.state.data.proportionError}
                        onChange={this.handleChange.bind(this)}
                      ></ProportionErrorMargin>
                    )}
                    {this.state.data.errorType === 'cv' && (
                      <VariationCoefficient
                        value={this.state.data.cv}
                        onChange={this.handleChange.bind(this)}
                      ></VariationCoefficient>
                    )}
                    {this.state.data.estimatedStatistic === 'mean' ? (
                      <StandardDeviation
                        onChange={this.handleChange.bind(this)}
                        value={this.state.data.stddev}
                      ></StandardDeviation>
                    ) : (
                      <EstimatedProportion
                        onChange={this.handleChange.bind(this)}
                        value={this.state.data.estimatedProportion}
                      ></EstimatedProportion>
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <Confidence onChange={this.handleChange.bind(this)} value={this.state.data.confidence}></Confidence>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item sm={6}>
                <Typography variant="h5">Velikost vzorca vsaj:</Typography>
                <Typography variant="h3">
                  {this.state.sampleSize}{' '}
                  <Typography variant="body1" component="span">
                    enot
                  </Typography>
                </Typography>
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
