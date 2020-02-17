import React from 'react';
import { connect } from 'react-redux';
import { setStepCompleted } from '../../store/calculators/t-test/actionCreators';
import { Container, Grid, Typography, Box } from '@material-ui/core';

import InputTable from './components/InputTable';
import ResultsTable from './components/ResultsTable';
class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      results,
      number_of_samples,
      data,
      proportions_or_means
    } = this.props;
    return (
      <Container>
        <Grid container spacing={4} justify="center">
          <Grid item>
            <Box mb={2}>
              <Typography variant="h6">Vhodni podatki</Typography>
            </Box>

            <InputTable
              data={data}
              number_of_samples={number_of_samples}
              proportions_or_means={proportions_or_means}
            ></InputTable>
          </Grid>
          <Grid item>
            <Box mb={2}>
              <Typography variant="h6">Rezultati</Typography>
            </Box>
            <ResultsTable results={results}></ResultsTable>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    number_of_samples: state.calculators['t-test'].number_of_samples,
    proportions_or_means: state.calculators['t-test'].proportions_or_means,
    data: state.calculators['t-test'].data,
    options: state.calculators['t-test'].options,
    results: state.calculators['t-test'].results
  };
};

const mapDispatchToProps = {
  setStepCompleted
};

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
