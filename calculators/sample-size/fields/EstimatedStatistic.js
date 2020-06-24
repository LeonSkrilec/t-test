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
      <FormLabel>Ocenjevana statistika</FormLabel>
      <RadioGroup name="estimatedStatistic" onChange={props.onChange}>
        <FormControlLabel value="proportion" control={<Radio />} label="Delež" checked={props.value === 'proportion'} />
        <FormControlLabel value="mean" control={<Radio />} label="Povprečje" checked={props.value === 'mean'} />
      </RadioGroup>
    </FormControl>
  );
}

Population.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Population;
