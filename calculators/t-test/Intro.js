import React from 'react';
import Typography from '@material-ui/core/Typography';
import PageControls from './components/PageControls';
import Theory from './components/Theory';
import { changeCalculatorStep } from '../../support/routing';
import { Grid, Box, Fab, Tooltip } from '@material-ui/core';
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
  },
  tooltip: {
    fontSize: '0.9rem'
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
              <Tooltip
                title="Enote so bile izbrane v vzorec s postopkom enostavnega slučajnega vzorca. Vsaka enota ima enako verjetnost
              izbora v vzorec."
                placement="top-start"
                arrow
                classes={classes}
              >
                <strong>Enostavni slučajni vzorec</strong>
              </Tooltip>
            </li>
            <li>
              <Tooltip
                title="Enote v vzorcu so neodvisne med seboj. To zagotovimo z vzročenjem z zamenjavo ali pa z velikostjo vzorca
              manjšo od 10% velikosti populacije."
                placement="top-start"
                arrow
                classes={classes}
              >
                <strong>Neodvisnost enot</strong>
              </Tooltip>
            </li>
            <li>
              <Tooltip
                title="Preverimo ali je porazdelitev spremenljivke na populaciji približno normalna, ali pa zagotovimo
              dovolj velik vzorec (N > 30)."
                placement="top-start"
                arrow
                classes={classes}
              >
                <strong>Normalna porazdelitev</strong>
              </Tooltip>
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
