import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    minWidth: 120,
    width: '100%'
  }
}));

function Population(props) {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <FormLabel>Tip napake</FormLabel>
      <RadioGroup name="errorType" onChange={props.onChange}>
        <FormControlLabel
          value="se"
          control={<Radio />}
          label="SE - Standardna napaka"
          checked={props.value === 'se'}
        />
        <FormControlLabel
          value="cv"
          control={<Radio />}
          label="CV - Koeficient variacije"
          checked={props.value === 'cv'}
        />
      </RadioGroup>
    </FormControl>
  );
}

Population.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Population;
