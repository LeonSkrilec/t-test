import React from 'react';
import { Typography, Fab, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Theory from './Theory';
import { changeCalculatorStep } from '../../support/routing';
const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: '30px',
    right: '20px',
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  startButton: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  tooltip: {
    fontSize: '0.9rem'
  }
}));

export default function Intro() {
  const classes = useStyles();

  return (
    <Grid container spacing={0}>
      <Fab
        variant="extended"
        color="primary"
        className={classes.fab}
        onClick={() => changeCalculatorStep('velikost-vzorca', 'calculation')}
      >
        Začni izračun <ChevronRightIcon className={classes.extendedIcon}></ChevronRightIcon>
      </Fab>

      <Grid item sm={6}>
        <Typography variant="body1" component="p">
          Eno od prvih vprašanj pri načrtovanju vzorcev se vsekakor nanaša na njegovo velikost. Velikost vzorca lahko
          izračunamo tako, da navedemo velikost populacije, interval tveganja in stopnjo natančnosti vzorčne cenilke.
        </Typography>
        <Theory></Theory>
      </Grid>
      <Grid item sm={6}></Grid>
    </Grid>
  );
}
