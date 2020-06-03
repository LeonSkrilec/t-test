import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Tabs, Tab, Container } from '@material-ui/core';
import Link from 'next/link';
import LogoHorizontal from '../assets/images/logos/logo-horizontal.svg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  logo: {
    flexGrow: 1,
    height: '40px',
    '& img': {
      height: '100%'
    }
  },
  tabs: {
    alignSelf: 'flex-end'
  }
}));

function LinkTab(props) {
  return (
    <Link href={props.href}>
      <Tab component="button" {...props} />
    </Link>
  );
}

export default function PageHeader() {
  const classes = useStyles();
  return (
    <AppBar position="sticky" color="default">
      <Container disableGutters>
        <Toolbar>
          <div className={classes.logo}>
            <Link href="/">
              <img src={LogoHorizontal} alt="t-test" />
            </Link>
          </div>
          <Tabs aria-label="nav tabs" value="home" className={classes.tabs}>
            <LinkTab label="Domov" href="/" value="home" />
            <LinkTab label="Aplikacija" href="/kalkulatorji" />
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
