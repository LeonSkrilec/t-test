import React from 'react';
import { Container, Grid, FormLabel } from '@material-ui/core';
import PageControls from './components/PageControls';
import { connect } from 'react-redux';
import { setCalculationData, setStepCompleted, setResults } from '../../store/calculators/t-test/actionCreators';

import { getFields } from './helpers/dataFieldsList';
import DataInput from './components/DataInput';
import validator from './helpers/dataValidator';
import { changeCalculatorStep } from '../../support/routing';
import { calculate } from './helpers/calculation';

/**
 * This component renders input fields according to data in store.
 * Different fieldsets are rendered if user is calculating proportions, means, one sample or two sample.
 * Data is validated on submit. Field values are stored in local state.
 * After data is validated it is synced with central redux store.
 */

class Data extends React.Component {
  // Data collection point.
  constructor(props) {
    super(props);

    this.validation = new validator();
    // We retrieve field map from dataFieldList
    const fieldMap = getFields({
      proportions_or_means: props.proportions_or_means,
      number_of_samples: props.number_of_samples
    });

    this.state = {
      fields: fieldMap.fields
    };
  }

  handleChange = event => {
    // Find field by id in local state and update its value property via this.setState()
    const { type, value, id } = event.target;
    // If input type is number, parse value to actual number type
    const val = type === 'number' ? parseFloat(value) : value;
    const updatedFields = this.state.fields.map(field => {
      if (field.id === id) {
        field.value = val;

        // Reset error state
        if (field.error) {
          field.error = false;
          field.helperText = field.hadHelperText;
        }
      }

      return field;
    });

    this.setState({ fields: updatedFields });
  };

  onSubmit = e => {
    e.preventDefault();

    let isDataValid = true;
    const validatedFields = this.state.fields.map(field => {
      const isFieldValid = this.validation.validate(field);
      // console.log('validation is: ', isFieldValid);
      if (!isFieldValid) {
        isDataValid = false;
        field.error = true;
        field.hadHelperText = field.helperText;
        field.helperText = field.validation.errorMessage;
      }
      return field;
    });

    return isDataValid ? this.onDataValid() : this.setState({ fields: validatedFields });
  };

  onDataValid() {
    // TODO: 1. Update calculator data in store. 2. Route to next page
    console.log('data is valid! Lets go to next page ho.');
    // Save local fields data to central redux store.

    let data = {
      samples: [{}, {}],
      hypothetical_mean: null,
      hypothetical_proportion: null
    };
    const sampleKeys = ['number_of_units', 'mean', 'variance', 'proportion'];
    for (let i = 0; i < this.state.fields.length; i++) {
      const field = this.state.fields[i];
      if (sampleKeys.includes(field.name)) {
        data.samples[field.column][field.name] = field.value;
      } else {
        data[field.name] = field.value;
      }
    }
    this.props.setCalculationData(data);
    this.props.setStepCompleted({ name: 'data' });

    this.makeCalculation(data).then(results => {
      this.props.setResults(results);
      this.props.setStepCompleted({ name: 'options' });
      changeCalculatorStep('t-test', 'results');
    });
  }

  makeCalculation(data) {
    return calculate({
      number_of_samples: this.props.number_of_samples,
      proportions_or_means: this.props.proportions_or_means,
      options: this.props.options,
      data: data
    });
  }

  renderField(field) {
    // Render TextField
    return <DataInput key={field.id} {...field} onChange={this.handleChange}></DataInput>;
  }

  getField(name, column) {
    return this.state.fields.find(field => field.name === name && field.column == column);
  }

  render() {
    return (
      <Container maxWidth="sm">
        <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <FormLabel component="p" style={{ marginBottom: '15px' }}>
                Opisne statistike prvega vzorca
              </FormLabel>
              {this.state.fields.map(field => (field.column === 0 ? this.renderField(field) : null))}
            </Grid>
            <Grid item sm={6}>
              <FormLabel component="p" style={{ marginBottom: '15px' }}>
                {this.props.number_of_samples === 2 ? 'Opisne statistike drugega vzorca' : 'Hipotetična vrednost'}
              </FormLabel>
              {this.state.fields.map(field => (field.column === 1 ? this.renderField(field) : null))}
            </Grid>
          </Grid>

          <PageControls
            nextText="naprej"
            previousPage="nazaj"
            nextClickHandler={this.nextClickHandler}
            previousClickHandler={() => changeCalculatorStep('t-test', 'subject')}
            nextButtonType="submit"
          ></PageControls>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.calculators['t-test'].error,
    samples: state.calculators['t-test'].samples,
    number_of_samples: state.calculators['t-test'].number_of_samples,
    proportions_or_means: state.calculators['t-test'].proportions_or_means,
    data: state.calculators['t-test'].data,
    options: state.calculators['t-test'].options
  };
};

const mapDispatchToProps = {
  setCalculationData,
  setStepCompleted,
  setResults
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);
