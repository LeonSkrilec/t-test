import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

function DataInput(props) {
  return (
    <TextField
      id={props.id}
      label={props.label}
      variant="outlined"
      helperText={props.helperText}
      type={props.type}
      margin="normal"
      name={props.name}
      onChange={props.onChange}
      error={props.error}
      value={props.value}
    />
  );
}

DataInput.propTypes = {
  id: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DataInput;
