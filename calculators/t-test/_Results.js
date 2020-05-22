import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Typography, Box, ButtonGroup, Button, FormControl } from '@material-ui/core';
import { setOptions } from '../../store/calculators/t-test/actionCreators';
import PageControls from './components/PageControls';
import { changeCalculatorStep } from '../../support/routing';
import SummaryTable from './components/SummaryTable';
import Hypothesis from './components/Hypothesis';
import Interpretation from './components/Interpretation';
class Intro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      significances: [
        {
          value: 0.01,
          percent: '1%'
        },
        {
          value: 0.05,
          percent: '5%'
        },
        {
          value: 0.1,
          percent: '10%'
        }
      ],
      tails: [
        {
          value: 1,
          label: 'Enostranski',
          two_tailed: false
        },
        {
          value: 2,
          label: 'Dvostranski',
          two_tailed: true
        }
      ]
    };
  }

  optionChange(option, value) {
    if (option === 'significance') value = parseFloat(value);
    this.props.setOptions({ [option]: value });
  }

  render() {
    const { results, number_of_samples, data, proportions_or_means, options } = this.props;
    return (
      <Container>
        <Grid container spacing={4} justify="left">
          <Grid item sm={4}>
            <Box mb={2}>
              <Typography variant="h5">Podatki in izračuni</Typography>
            </Box>

            <SummaryTable
              results={results}
              data={data}
              number_of_samples={number_of_samples}
              proportions_or_means={proportions_or_means}
              two_tailed={options.two_tailed}
            ></SummaryTable>
          </Grid>
          <Grid item sm={8}>
            <Box mb={2}>
              <Typography variant="h5">Interpretacija</Typography>
              <Grid container spacing={3}>
                <Grid item>
                  <FormControl>
                    <Typography variant="overline">Signifikanca</Typography>
                    <ButtonGroup size="small" color="primary" aria-label="outlined primary button group">
                      {this.state.significances.map(sig => (
                        <Button
                          key={sig.value}
                          variant={options.significance === sig.value ? 'contained' : ''}
                          onClick={() => this.optionChange('significance', sig.value)}
                        >
                          {sig.percent}
                        </Button>
                      ))}
                    </ButtonGroup>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl>
                    <Typography variant="overline">Tip testa</Typography>
                    <ButtonGroup size="small" color="primary" aria-label="outlined primary button group">
                      {this.state.tails.map(tail => (
                        <Button
                          key={tail.value}
                          variant={options.two_tailed === tail.two_tailed ? 'contained' : ''}
                          onClick={() => this.optionChange('two_tailed', tail.two_tailed)}
                        >
                          {tail.label}
                        </Button>
                      ))}
                    </ButtonGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Box my={2}>
                <Hypothesis
                  statistic={proportions_or_means}
                  sides={options.two_tailed ? 2 : 1}
                  samples={number_of_samples}
                  data={data}
                ></Hypothesis>
              </Box>
              <Box my={2}>
                <Typography variant="body2">
                  Izračunana eksperimentalna vrednost testne statistike{' '}
                  <strong>
                    <i>t = {results.tValue.toFixed(3)}</i>
                  </strong>
                </Typography>
                <Typography variant="body2">
                  Natančna stopnja značilnosti{' '}
                  <strong>
                    <i>p = {options.two_tailed ? results.pValue.toFixed(3) : (results.pValue / 2).toFixed(3)}</i>
                  </strong>{' '}
                  pri {options.two_tailed ? ' dvostranskem ' : ' enostranskem '} testu.
                </Typography>
                <Typography variant="body2">
                  Izbrana signifikanca{' '}
                  <strong>
                    <i> α = {options.significance}</i>
                  </strong>
                </Typography>
              </Box>
              <Box my={2}>
                <Interpretation
                  pvalue={options.two_tailed ? results.pValue : results.pValue / 2}
                  statistic={proportions_or_means}
                  data={data}
                  samples={number_of_samples}
                  significance={options.significance}
                ></Interpretation>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <PageControls
          nextText="Na začetek"
          previousPage="nazaj"
          nextClickHandler={() => changeCalculatorStep('t-test', 'intro')}
          previousClickHandler={() => changeCalculatorStep('t-test', 'data')}
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
  setOptions
};

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
