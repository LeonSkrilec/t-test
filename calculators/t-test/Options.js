import React from 'react';
import { connect } from 'react-redux';

import {
  Container,
  Grid,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio
} from '@material-ui/core';

import { setOptions } from '../../store/calculators/t-test/actionCreators';
import PageControls from './components/PageControls';
import { changeCalculatorStep } from '../../support/routing';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;

    console.log(value, name);

    // this.props.setOptions({[radioName]: value});
  }
  nextClickHandler() {
    // 1. check
    // 2. If data valid
    console.log('do calculate ...');
  }
  render() {
    return (
      <Container>
        <form noValidate autoComplete="off">
          <Grid container spacing={4}>
            <Grid item sm={6}>
              <FormControl>
                <FormLabel style={{ marginBottom: '15px' }}>
                  Sta varianci enaki?
                </FormLabel>
                <RadioGroup
                  aria-label="equality-of-variances"
                  name="equal_variances"
                  onChange={e => this.handleChange(e, 'equal_variances')}
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Varianci sta enaki"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="Varianci nista enaki"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item sm={6}>
              <FormControl>
                <FormLabel style={{ marginBottom: '15px' }}>
                  V kakšnem razmerju so vzorčne enote?
                </FormLabel>
                <RadioGroup
                  aria-label="paired-samples"
                  name="paired_samples"
                  onChange={e => this.handleChange(e, 'paired_samples')}
                >
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="Neodvisna vzorca"
                  />
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Odvisna vzorca"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item sm={6}>
              <FormControl>
                <FormLabel
                  style={{
                    marginBottom: '15px'
                  }}
                >
                  Izberi signifikanco
                </FormLabel>
                <RadioGroup
                  aria-label="significance"
                  name="significance"
                  onChange={e => this.handleChange(e, 'significance')}
                >
                  <FormControlLabel
                    value="0.05"
                    control={<Radio />}
                    label="0,05"
                  />
                  <FormControlLabel
                    value="0.01"
                    control={<Radio />}
                    label="0,01"
                  />
                  <FormControlLabel
                    value="0.001"
                    control={<Radio />}
                    label="0,001"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item sm={6}>
              <FormControl>
                <FormLabel style={{ marginBottom: '15px' }}>
                  Dvo ali eno stranski test?
                </FormLabel>
                <RadioGroup
                  aria-label="two-tailed"
                  name="two_tailed"
                  onChange={e => this.handleChange(e, 'two_tailed')}
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Dvostranski"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="Enostranski"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <PageControls
            nextText="Izračunaj"
            previousPage="nazaj"
            nextClickHandler={this.nextClickHandler}
            previousClickHandler={() => changeCalculatorStep('t-test', 'data')}
          ></PageControls>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    options: state.calculators['t-test'].options
  };
};

const mapDispatchToProps = {
  setOptions
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
