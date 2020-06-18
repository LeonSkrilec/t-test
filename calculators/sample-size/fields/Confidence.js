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
      <InputLabel id="conf-label">Interval zaupanja</InputLabel>
      <Select
        id="confidence"
        labelId="conf-label"
        name="confidence"
        onChange={props.onChange}
        value={props.value}
        label="Interval zaupanja"
      >
        <MenuItem value={0.8}>80%</MenuItem>
        <MenuItem value={0.85}>85%</MenuItem>
        <MenuItem value={0.9}>90%</MenuItem>
        <MenuItem value={0.95}>95%</MenuItem>
        <MenuItem value={0.99}>99%</MenuItem>
      </Select>

      <FormHelperText>Verjetnost, da vzorčna ocena pravilno ocenjuje populacijsko.</FormHelperText>
    </FormControl>
  );
}

Confidence.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number
};

export default Confidence;
