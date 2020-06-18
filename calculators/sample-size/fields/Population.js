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

function Population(props) {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <TextField
        id="population"
        label="Velikost populacije"
        variant="outlined"
        type="number"
        name="population"
        onChange={props.onChange}
        helperText="Množica statističnih enot, ki jo proučujemo"
      />
    </FormControl>
  );
}

Population.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Population;
