import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VerticalWhiteLogo from '../../assets/images/logos/vertical-white.svg';
import HeroBackground from '../../assets/images/hero-banner.jpg';
import { Typography, Button } from '@material-ui/core';
import Link from 'next/link';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles(theme => ({
  root: {
    height: '450px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    backgroundImage: `url(${HeroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    justifyItems: 'center',
    alignItems: 'end',
    padding: theme.spacing(3)
  },
  logo: {},
  logoImage: {
    height: '180px'
  },
  headline: {
    maxWidth: '500px',
    textAlign: 'center',
    margin: `${theme.spacing(2)}px 0`
  }
}));

export default function HeroBanner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <img className={classes.logoImage} src={VerticalWhiteLogo} alt="T-test logo" />
      </div>
      <div className={classes.headline}>
        <Typography variant="h1">Odprtokodna aplikacija za online statistične izračune</Typography>
      </div>
      <div className="start">
        <Link href="/kalkulatorji">
          <Button component="a" variant="contained" size="large" endIcon={<LaunchIcon />}>
            Začni
          </Button>
        </Link>
      </div>
    </div>
  );
}
