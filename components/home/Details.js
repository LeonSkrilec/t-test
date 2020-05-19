import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import Link from 'next/link';

export default function Details() {
  return (
    <Box component="section" id="app-description" py={6}>
      <Container fixed>
        <Box>
          <Grid container spacing={0}>
            <Grid item sm={6}>
              <Typography variant="h2">Enostavna uporaba</Typography>
              <Typography variant="body1">
                Izognite se preglavicam učenja uporabe zahtevnih statističnih
                programov, kot so SPSS, R ali STATA, za potrebe osnovnih
                statističnih kalkulacij.
              </Typography>
            </Grid>
            <Grid item sm={6}></Grid>
          </Grid>
        </Box>

        <Box my={4}>
          <Grid container spacing={0}>
            <Grid item sm={6}></Grid>
            <Grid item sm={6}>
              <Typography variant="h2">
                Jasna interpretacija rezultatov
              </Typography>
              <Typography variant="body1">
                Najpomembnejši vidik statistične analize je interpretacija
                rezultatov. Aplikacija T-test vam ponuja jasno tekstovno in
                grafično interpretacijo rezultatov.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box my={4}>
          <Grid container spacing={0}>
            <Grid item sm={6}>
              <Typography variant="h2">Teoretske opredelitve</Typography>
              <Typography variant="body1">
                Številke brez teoretskega ozadja in konteksta so le številke.
                Zato vam v aplikaciji T-test pred vsakim izračunom predstavimo
                teoretsko ozadje izračuna ter predstavimo predpostavke, ki jih
                morajo vaši podatki izpolnjevati za uspešen in nepristranski
                izračun.
              </Typography>
            </Grid>
            <Grid item sm={6}></Grid>
          </Grid>
        </Box>

        <Box mt={8} textAlign="center">
          <Link href="/calculators">
            <Button
              variant="contained"
              size="large"
              color="primary"
              endIcon={<LaunchIcon />}
            >
              Začni z uporabo
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
