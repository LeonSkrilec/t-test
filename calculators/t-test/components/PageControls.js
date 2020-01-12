import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button } from '@material-ui/core';
// Component that will render buttons for next and previous page in calculator
// Next and previous are components to render

// TODO: think about how you will pass next URL to this component. Currently you are hardcoding it here /calculators/t-test. It should be more flexible.
export default class pageControls extends Component {
  static propTypes = {
    nextText: PropTypes.string,
    previousText: PropTypes.string,
    nextClickHandler: PropTypes.func,
    previousClickHandler: PropTypes.func,
    nextButtonType: PropTypes.string
  };

  static defaultProps = {
    nextText: 'Naprej',
    previousText: 'Nazaj',
    nextButtonType: 'button'
  };

  render() {
    return (
      <Grid
        container
        spacing={3}
        alignItems="center"
        justify="center"
        style={{ marginTop: '20px' }}
      >
        {this.props.previousPage && (
          <Grid item xs={2}>
            <Button onClick={this.props.previousClickHandler}>
              {this.props.previousText}
            </Button>
          </Grid>
        )}

        <Grid item xs={2}>
          {this.props.nextButtonType === 'submit' ? (
            <Button variant="contained" color="primary" type="submit">
              {this.props.nextText}
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.nextClickHandler}
            >
              {this.props.nextText}
            </Button>
          )}
        </Grid>
      </Grid>
    );
  }
}
