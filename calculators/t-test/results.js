import React from 'react';
import { connect } from 'react-redux';
import { setStepCompleted } from '../../store/calculators/t-test/actionCreators';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import PageControls from './components/PageControls';
import { changeCalculatorStep } from '../../support/routing';
import SummaryTable from './components/SummaryTable';

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
        <Grid container spacing={4} justify="left">
          <Grid item>
            <Box mb={2}>
              <Typography variant="h6">Podatki in izračuni</Typography>
            </Box>

            <SummaryTable
              results={results}
              data={data}
              number_of_samples={number_of_samples}
              proportions_or_means={proportions_or_means}
            ></SummaryTable>
          </Grid>
          <Grid item>
            <Box mb={2}>
              <Typography variant="h6">Interpretacija</Typography>
              <Typography variant="body1">
                Prosojnice Inferenčna statistika PDF stran 38
              </Typography>
              <Typography variant="body1">
                ... Najprej postavi hipotezi ... Če primerjaš delež ali
                povprečje ... <br></br>H0: ... Ali primerjaš dvostranski ali eno
                stranski...
              </Typography>
              <ul>
                <li>H1: γ ≠ γ - dvostranski test</li>
                <li>H1: γ > γ - enostranski test</li>
                <li>{'H1: γ < γ - enostranski test'}</li>
              </ul>
              <Typography variant="body1">
                Napišeš interpretacijo glede na izbrano signifikanco α
              </Typography>
              Ponovimo: 1. Postavimo ničelno in njen nasprotno alternativno
              domnevo. 2. Poiščemo ustrezno testno statistiko, njeno
              porazdelitev in izračunamo eksperimentalno vrednost testne
              statistike (standardizirana vrednost) na osnovi podatkov iz
              vzorca. 3. Odločimo se za stopnjo značilnosti α, ob kateri bomo
              preverjali ničelno domnevo. 4. Za eksperimentalno vrednost testne
              statistike izračunamo natančno stopnjo značilnosti p. 5. Če je p ≤
              α, ničelno domnevo zavrnemo ob stopnji značilnosti α in kot
              pravilna nam ostane alternativna domneva. Če je p > α, ničelne
              domneve ob stopnji značilnosti α ne moremo zavrniti.
            </Box>
          </Grid>
        </Grid>
        <PageControls
          nextText="naprej"
          previousPage="nazaj"
          nextClickHandler={this.nextClickHandler}
          previousClickHandler={() => changeCalculatorStep('t-test', 'data')}
          nextButtonType="submit"
        ></PageControls>
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
