import React from 'react';
import Router from 'next/router';
import { Container, Grid, FormLabel } from '@material-ui/core';
import PageControls from './components/PageControls';
import { connect } from 'react-redux';
import { setSampleData } from '../../store/calculators/t-test/actionCreators';

import { getFields } from './helpers/dataFieldsList';
import DataInput from './components/DataInput';
import validator from './helpers/dataValidator';

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
    const { type, name, value, id, attributes } = event.target;
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

  previousClickHandler = () => {
    const previousPageName = 'subject';
    Router.push(
      `/calculators/[...slug]`,
      `/calculators/t-test/${previousPageName}`
    );
  };
  onSubmit = e => {
    e.preventDefault();

    let isDataValid = true;
    const validatedFields = this.state.fields.map(field => {
      const isFieldValid = this.validation.validate(field);
      if (!isFieldValid) {
        isDataValid = false;
        field.error = true;
        field.hadHelperText = field.helperText;
        field.helperText = field.validation.errorMessage;
      }
      return field;
    });

    return isDataValid
      ? this.onDataValid()
      : this.setState({ fields: validatedFields });
  };

  onDataValid() {
    // TODO: 1. Update calculator data in store. 2. Route to next page
    console.log('data is valid! Lets go to next page ho.');
  }

  renderField(field) {
    // Render TextField
    return (
      <DataInput
        key={field.id}
        {...field}
        onChange={this.handleChange}
      ></DataInput>
    );
  }

  render() {
    return (
      <Container maxWidth="sm">
        <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <FormLabel component="p" style={{ marginBottom: '15px' }}>
                Opisne statistike prvega vzorca
              </FormLabel>
              {this.state.fields.map(field =>
                field.column === 0 ? this.renderField(field) : null
              )}
            </Grid>
            <Grid item xs={6}>
              <FormLabel component="p" style={{ marginBottom: '15px' }}>
                {this.props.number_of_samples === 2
                  ? 'Opisne statistike drugega vzorca'
                  : 'Hipotetična vrednost'}
              </FormLabel>
              {this.state.fields.map(field =>
                field.column === 1 ? this.renderField(field) : null
              )}
            </Grid>
          </Grid>

          <PageControls
            nextText="naprej"
            previousPage="nazaj"
            nextClickHandler={this.nextClickHandler}
            previousClickHandler={this.previousClickHandler}
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
    number_of_samples: state.calculators['t-test'].number_of_samples,
    proportions_or_means: state.calculators['t-test'].proportions_or_means,
    samples: state.calculators['t-test'].samples,
    hypothetical_mean: state.calculators['t-test'].hypothetical_mean,
    hypothetical_proportion: state.calculators['t-test'].hypothetical_proportion
  };
};

const mapDispatchToProps = {
  setSampleData
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);
