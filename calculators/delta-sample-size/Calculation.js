import React from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import PageControls from '../components/PageControls';
import { changeCalculatorStep } from '../../support/routing';
import Confidence from './fields/Confidence';
import VariableType from './fields/VariableType';
import ErrorType from './fields/ErrorType';
import AbsoluteDifference from './fields/AbsoluteDifference';
import RelativeDifference from './fields/RelativeDifference';
import EstimatedMean from './fields/EstimatedMean';
import EstimatedProportion from './fields/EstimatedProportion';
import StandardDeviation from './fields/StandardDeviation';

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
        variableType: 'percentage',
        errorType: 'relative',
        confidence: 0.95,
        difference: 5,
        estimatedMean: 3,
        estimatedProportion: 50,
        std: 1
      },
      sampleSize: 0
    };
  }

  componentDidMount() {
    this.isAbleToCalculate();
  }

  handleChange = event => {
    let { name, value } = event.target;

    let updatedData = { ...this.state.data };
    if (name !== 'variableType' && name !== 'errorType' && value !== '') {
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
    if (this.state.data.variableType === 'percentage') {
      const { estimatedProportion, errorType, confidence, difference } = this.state.data;
      if (!estimatedProportion || !errorType || !confidence || !difference) return this.cantCalculate();
      if (isNaN(estimatedProportion) || isNaN(difference)) return this.cantCalculate();
      if (estimatedProportion < 0 || estimatedProportion > 100) return this.cantCalculate();
      if (this.state.data.errorType === 'absolute')
        return this.calculatePercentageAbsoluteDiff(
          estimatedProportion / 100,
          difference,
          this.confidenceZmap[confidence]
        );
      if (this.state.data.errorType === 'relative')
        this.calculatePercentageRelativeDiff(
          estimatedProportion / 100,
          difference / 100,
          this.confidenceZmap[confidence]
        );
    } else {
      const { estimatedMean, std, errorType, confidence, difference } = this.state.data;
      if (!std || !errorType || !confidence || !difference) return this.cantCalculate();
      if (isNaN(std) || isNaN(difference)) return this.cantCalculate();

      if (this.state.data.errorType === 'relative') {
        if (!estimatedMean || isNaN(estimatedMean)) return this.cantCalculate();
      }

      if (this.state.data.errorType === 'absolute')
        return this.calculateMeanAbsoluteDiff(std, difference, this.confidenceZmap[confidence]);
      if (this.state.data.errorType === 'relative')
        this.calculateMeanRelativeDiff(estimatedMean, std, difference / 100, this.confidenceZmap[confidence]);
    }
  }

  calculatePercentageAbsoluteDiff(p, d, z) {
    const q = 1 - p;
    const n = (2 * Math.pow(z, 2) * p * q) / Math.pow(d, 2);
    return this.setState({ sampleSize: Math.ceil(n) });
  }

  calculatePercentageRelativeDiff(p, d, z) {
    const q = 1 - p;
    const n = (2 * Math.pow(z, 2) * p * q) / Math.pow(d * p, 2);
    return this.setState({ sampleSize: Math.ceil(n) });
  }

  calculateMeanAbsoluteDiff(sd, d, z) {
    const n = (2 * Math.pow(z, 2) * Math.pow(sd, 2)) / Math.pow(d, 2);
    return this.setState({ sampleSize: Math.ceil(n) });
  }

  calculateMeanRelativeDiff(x, sd, d, z) {
    const n = (2 * Math.pow(z, 2) * Math.pow(sd, 2)) / Math.pow(d * x, 2);
    return this.setState({ sampleSize: Math.ceil(n) });
  }

  cantCalculate() {
    this.setState({ sampleSize: 0 });
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
                    <VariableType
                      onChange={this.handleChange.bind(this)}
                      value={this.state.data.variableType}
                    ></VariableType>
                    <Confidence onChange={this.handleChange.bind(this)} value={this.state.data.confidence}></Confidence>
                  </Grid>
                  <Grid item xs={6}>
                    <ErrorType onChange={this.handleChange.bind(this)} value={this.state.data.errorType}></ErrorType>
                    {this.state.data.errorType === 'relative' && (
                      <RelativeDifference
                        value={this.state.data.difference}
                        onChange={this.handleChange.bind(this)}
                      ></RelativeDifference>
                    )}

                    {this.state.data.errorType === 'absolute' && (
                      <AbsoluteDifference
                        value={this.state.data.difference}
                        onChange={this.handleChange.bind(this)}
                      ></AbsoluteDifference>
                    )}
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    {this.state.data.variableType === 'interval' && (
                      <StandardDeviation
                        value={this.state.data.std}
                        onChange={this.handleChange.bind(this)}
                      ></StandardDeviation>
                    )}

                    {this.state.data.variableType === 'percentage' && (
                      <EstimatedProportion
                        value={this.state.data.estimatedProportion}
                        onChange={this.handleChange.bind(this)}
                      ></EstimatedProportion>
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    {this.state.data.variableType === 'interval' && this.state.data.errorType === 'relative' && (
                      <EstimatedMean
                        value={this.state.data.estimatedMean}
                        onChange={this.handleChange.bind(this)}
                      ></EstimatedMean>
                    )}
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
