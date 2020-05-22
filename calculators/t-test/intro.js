import React from 'react';
import Typography from '@material-ui/core/Typography';
import PageControls from './components/PageControls';
import Theory from './components/Theory';
import { changeCalculatorStep } from '../../support/routing';
import { Grid, Box, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

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
  }
}));

export default function IntroFunctional() {
  const classes = useStyles();
  return (
    <Grid container spacing={0}>
      <Fab
        variant="extended"
        color="primary"
        className={classes.fab}
        onClick={() => changeCalculatorStep('t-test', 'subject')}
      >
        Začni izračun <ChevronRightIcon className={classes.extendedIcon}></ChevronRightIcon>
      </Fab>
      <Grid item sm={6}>
        <Theory></Theory>
      </Grid>
      <Grid item sm={4}>
        <Typography variant="h5">Predpostavke</Typography>
        <Typography variant="body1" paragraph component="div">
          <ul>
            <li>
              <strong>Enostavni slučajni vzorec</strong>
              <br></br>
              Enote so bile izbrane v vzorec s postopkom enostavnega slučajnega vzorca. Vsaka enota ima enako verjetnost
              izbora v vzorec.
            </li>
            <li>
              <strong>Neodvisnost enot</strong>
              <br></br>
              Enote v vzorcu so neodvisne med seboj. To zagotovimo z vzročenjem z zamenjavo ali pa z velikostjo vzorca
              manjšo od 10% velikosti populacije.
            </li>
            <li>
              <strong>Normalna porazdelitev</strong>
              <br></br>Preverimo ali je porazdelitev spremenljivke na populaciji približno normalna, ali pa zagotovimo
              dovolj velik vzorec (N > 30).
            </li>
          </ul>
        </Typography>

        <Box mt={3} className={classes.startButton}>
          <PageControls
            nextText="Začni izračun"
            previous={false}
            nextIcon={<ChevronRightIcon></ChevronRightIcon>}
            nextClickHandler={() => changeCalculatorStep('t-test', 'subject')}
          ></PageControls>
        </Box>
      </Grid>
    </Grid>
  );
}
