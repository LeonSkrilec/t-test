import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles(() => ({
  authorImage: {
    width: '50px',
    height: '50px',
    borderRadius: '100%',
    backgroundColor: 'lightgrey',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '100%',
      border: '2px solid lightgrey'
    }
  }
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Box component="section" id="kontakt" py={6}>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item sm={6} xs={12}>
            <Typography variant="h4">O projektu</Typography>
            <Typography variant="body1" paragraph>
              Projekt se je začel leta 2019 na Fakulteti za družbene vede v
              Ljubljani. Nastal je iz potrebe po hitrih in dostopnih izračunih
              t-testa. Projekt je podrobneje opisan v diplomski nalogi, ki je
              dostopna{' '}
              <a
                href="https://www.fdv.uni-lj.si/"
                target="_blank"
                rel="noopener noreferrer"
              >
                tukaj
              </a>
              .
            </Typography>
          </Grid>
        </Grid>

        <Box my={3}>
          <Typography variant="h4">Avtorji</Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item sm={6} xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <div className={classes.authorImage}>
                  <img
                    src={require('../../assets/images/leon.jpeg')}
                    alt="Leon Škrilec"
                  />
                </div>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h5">Leon Škrilec</Typography>
                <Typography variant="overline">
                  Diplomant, spletni razvijalec
                </Typography>
                <Typography variant="body2">
                  Diplomant družboslovne informatike, vsestranski spletni
                  razvijalec in navdušenec nad statistiko.
                </Typography>
                <Box>
                  <IconButton
                    href="https://github.com/LeonSkrilec"
                    target="_blank"
                  >
                    <GitHubIcon></GitHubIcon>
                  </IconButton>
                  <IconButton
                    href="https://www.linkedin.com/in/leon-škrilec-67317792"
                    target="_blank"
                  >
                    <LinkedIcon></LinkedIcon>
                  </IconButton>
                  <IconButton href="mailto:leon.skrilec@gmail.com">
                    <MailIcon></MailIcon>
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <div className={classes.authorImage}></div>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h5">prof. dr. Vasja Vehovar</Typography>
                <Typography variant="overline">Mentor</Typography>
                <Typography variant="body2">
                  Redni profesor na Fakulteti za družbene vede, pobudnik
                  aplikacije in idejni vodja razvoja.
                </Typography>
                <Box>
                  <IconButton
                    href="https://www.fdv.uni-lj.si/obvestila-in-informacije/imenik-sodelavcev/pedagogi/kartica/vasja-vehovar/"
                    target="_blank"
                  >
                    <LaunchIcon></LaunchIcon>
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
