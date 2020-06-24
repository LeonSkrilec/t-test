import React from 'react';
import PropTypes from 'prop-types';
import { Select, MenuItem, InputLabel, FormControl, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    minWidth: 120,
    width: '100%'
  }
}));

function Confidence(props) {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="cv-label">Koeficient variacije</InputLabel>
      <Select name="cv" labelId="cv-label" onChange={props.onChange} value={props.value} label="Koeficient variacije">
        <MenuItem value={0.01}>0,01</MenuItem>
        <MenuItem value={0.05}>0,05</MenuItem>
        <MenuItem value={0.1}>0,10</MenuItem>
        <MenuItem value={0.2}>0,20</MenuItem>
        <MenuItem value={0.33}>0,33</MenuItem>
      </Select>
    </FormControl>
  );
}

Confidence.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number
};

export default Confidence;
