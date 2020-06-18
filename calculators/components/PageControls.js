import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button } from '@material-ui/core';
// Component that will render buttons for next and previous page in calculator
// Next and previous are components to render

export default class pageControls extends Component {
  static propTypes = {
    nextText: PropTypes.string,
    nextIcon: PropTypes.node,
    previousText: PropTypes.string,
    nextClickHandler: PropTypes.func,
    previousClickHandler: PropTypes.func,
    nextButtonType: PropTypes.string,
    previous: PropTypes.bool
  };

  static defaultProps = {
    nextText: 'Naprej',
    previousText: 'Nazaj',
    nextButtonType: 'button',
    previous: true
  };

  render() {
    return (
      <Grid container spacing={3} alignItems="center" justify="center" style={{ marginTop: '20px' }}>
        {this.props.previous && (
          <Grid item>
            <Button onClick={this.props.previousClickHandler}>{this.props.previousText}</Button>
          </Grid>
        )}

        <Grid item>
          {this.props.nextButtonType === 'submit' ? (
            <Button variant="contained" color="primary" type="submit">
              {this.props.nextText}
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.nextClickHandler}
              endIcon={this.props.nextIcon}
            >
              {this.props.nextText}
            </Button>
          )}
        </Grid>
      </Grid>
    );
  }
}
