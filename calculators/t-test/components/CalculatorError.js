import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

function CalculatorError(props) {
  return (
    props.text && (
      <Typography color="error" align="center">
        {props.text}
      </Typography>
    )
  );
}

CalculatorError.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default CalculatorError;
