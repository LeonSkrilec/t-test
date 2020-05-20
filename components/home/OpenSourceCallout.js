import React from 'react';
import { Container, Box, Typography, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function OpenSourceCallout() {
  return (
    <Box p={4} color="white" bgcolor="primary.main" textAlign="center">
      <Container disableGutters>
        <Box maxWidth="550px" margin="0 auto">
          <Typography variant="h3">
            Si razvijalec in te zanima statistika?
          </Typography>
          <Typography variant="body1" paragraph>
            Aplikacija T-test je odprtokodna, kar pomeni, da vsak lahko prispeva
            svoj del k celoti. Želimo si, da bi bila aplikacija čimbolj uporabna
            za vse raziskovalce, študente, doktorje in profesorje, zato pozivamo
            vse, ki jih zanimata spletni razvoj in statistika, da prispevajo
            svoj delež.
          </Typography>

          <Typography variant="body1" paragraph>
            Če še nimaš izkušenj s spletnim razvojem ti lahko pri prispevanju k
            aplikaciji T-test pomagamo z mentorstvom.
          </Typography>

          <Typography variant="body1" paragraph>
            Preveri več na Github-u ali nas kontaktiraj.
          </Typography>
          <Box my={2}>
            <Button
              variant="contained"
              href="https://github.com/LeonSkrilec/t-test"
              target="_blank"
              endIcon={<GitHubIcon />}
            >
              GitHub
            </Button>
          </Box>
          <Box my={2}>
            <Button variant="text" color="secondary" href="/#kontakt">
              Kontaktiraj nas
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
