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

import {
  setOptions,
  setStepCompleted,
  setResults
} from '../../store/calculators/t-test/actionCreators';
import PageControls from './components/PageControls';
import { changeCalculatorStep } from '../../support/routing';
import { calculate } from './helpers/calculation';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}

  handleChange(event) {
    let { value, name } = event.target;
    const booleans = ['two_tailed', 'paired_samples', 'equal_variances'];
    if (booleans.includes(name)) value = value == 'true'; // Convert "true" to boolean true or false
    if (name === 'significance') value = parseFloat(value);
    this.props.setOptions({ [name]: value });
  }
  nextClickHandler = () => {
    // We do not need to validate data since we are providing default values
    // If user does nothing and just proceeds we calculate using default values ...

    this.makeCalculation().then(results => {
      this.props.setResults(results);
      this.props.setStepCompleted({ name: 'options' });
      changeCalculatorStep('t-test', 'results');
    });
  };

  makeCalculation() {
    return calculate({
      number_of_samples: this.props.number_of_samples,
      proportions_or_means: this.props.proportions_or_means,
      data: this.props.data,
      options: this.props.options
    });
  }

  render() {
    return (
      <Container maxWidth="sm">
        <form noValidate autoComplete="off">
          <Grid container spacing={4}>
            {this.props.number_of_samples === 2 && (
              <Grid item sm={6}>
                <FormControl>
                  <FormLabel style={{ marginBottom: '15px' }}>
                    Sta populacijski varianci enaki?
                  </FormLabel>
                  <RadioGroup
                    aria-label="equality-of-variances"
                    name="equal_variances"
                    onChange={e => this.handleChange(e, 'equal_variances')}
                    value={this.props.options.equal_variances}
                  >
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label="Varianci sta enaki"
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label="Varianci nista enaki (Welch t-test)"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            )}

            <Grid item sm={6}>
              <FormControl>
                <FormLabel style={{ marginBottom: '15px' }}>
                  Dvo ali eno stranski test?
                </FormLabel>
                <RadioGroup
                  aria-label="two-tailed"
                  name="two_tailed"
                  onChange={e => this.handleChange(e, 'two_tailed')}
                  value={this.props.options.two_tailed}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Dvostranski"
                  />
                  <FormControlLabel
                    value={false}
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
    number_of_samples: state.calculators['t-test'].number_of_samples,
    proportions_or_means: state.calculators['t-test'].proportions_or_means,
    data: state.calculators['t-test'].data,
    options: state.calculators['t-test'].options
  };
};

const mapDispatchToProps = {
  setOptions,
  setStepCompleted,
  setResults
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
