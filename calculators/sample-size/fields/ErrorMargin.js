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
function ErrorMargin(props) {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <TextField
        id="error"
        label="Območje napake (%)"
        variant="outlined"
        type="number"
        name="error"
        onChange={props.onChange}
        helperText="Za koliko % dopuščamo odstopanje vzorčne vrednosti od populacijske."
      />
    </FormControl>
  );
}

ErrorMargin.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default ErrorMargin;
