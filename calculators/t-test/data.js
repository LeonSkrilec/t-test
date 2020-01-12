import React from 'react';
import Router from 'next/router';
import { Container, Grid, FormLabel, TextField } from '@material-ui/core';
import PageControls from './components/PageControls';
import { connect } from 'react-redux';
import { setSampleData } from '../../store/calculators/t-test/actionCreators';

import { getFields } from './helpers/dataFieldsList';
import DataInput from './components/DataInput';

class Data extends React.Component {
  // Data collection point.
  // TODO: Make proportion validation to be between 0-100 or 0-1.
  constructor(props) {
    super(props);

    if (!this.props.number_of_samples || !this.props.proportions_or_means) {
      return;
    }

    // We retrieve fields definitions
    const columnFields = getFields({
      proportions_or_means: this.props.proportions_or_means,
      number_of_samples: this.props.number_of_samples
    });

    this.state = {
      ...columnFields
    };
  }

  componentDidMount() {
    // TODO: prevent component from rendering if not required values in state. You should do that in Index.js in getInitialProps.
    // Currently it renders and than routes back to previous page
    if (!this.props.number_of_samples || !this.props.proportions_or_means) {
      this.previousClickHandler();
    }
  }

  handleChange = event => {
    // We update local state. Which field to update?
    // Find field by id in local state and update its value property

    const { type, name, value, id, attributes } = event.target;

    // Is this searching for which field to update optimal? Maybe refactor ...
    let fieldToUpdate;
    for (let i = 0; i < this.state.columns.length; i++) {
      const column = this.state.columns[i];
      fieldToUpdate = column.fields.find(field => {
        return field.id === id;
      });
      if (fieldToUpdate) break;
    }

    // If input type is number, change value to actual number
    const val = type === 'number' ? parseFloat(value) : value;

    fieldToUpdate.value = val;
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
    // TODO: Data validation + send to Redux

    console.log('validattion ...');
  };

  renderFields(fields) {
    // Render TextFields
    return fields.map((field, index) => {
      return (
        <DataInput
          key={index}
          {...field}
          onChange={this.handleChange}
        ></DataInput>
      );
    });
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
              {this.renderFields(this.state.columns[0].fields)}
            </Grid>
            <Grid item xs={6}>
              <FormLabel component="p" style={{ marginBottom: '15px' }}>
                Opisne statistike drugega vzorca
              </FormLabel>
              {this.renderFields(this.state.columns[1].fields)}
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
    samples: state.calculators['t-test'].samples
  };
};

const mapDispatchToProps = {
  setSampleData
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);
