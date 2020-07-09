import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 120,
    width: '100%'
  }
}));

function Population(props) {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <FormLabel>Razlika</FormLabel>
      <RadioGroup name="errorType" onChange={props.onChange}>
        <FormControlLabel value="relative" control={<Radio />} label="Relativna" checked={props.value === 'relative'} />
        <FormControlLabel value="absolute" control={<Radio />} label="Absolutna" checked={props.value === 'absolute'} />
      </RadioGroup>
    </FormControl>
  );
}

Population.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Population;
