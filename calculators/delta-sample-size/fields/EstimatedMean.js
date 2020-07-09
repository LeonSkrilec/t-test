import React from 'react';
import PropTypes from 'prop-types';
import { TextField, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    minWidth: 120,
    width: '100%'
  }
}));
function RatioErrorMargin(props) {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <TextField
        id="error"
        label="Predvideno vzročno povprečje"
        variant="outlined"
        type="number"
        name="estimatedMean"
        placeholder="Vnesi število"
        onChange={props.onChange}
        value={props.value}
      />
    </FormControl>
  );
}

RatioErrorMargin.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number
};

export default RatioErrorMargin;
