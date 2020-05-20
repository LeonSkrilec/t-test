import React from 'react';
import Typography from '@material-ui/core/Typography';
import PageControls from './components/PageControls';
import Theory from './components/Theory';
import { changeCalculatorStep } from '../../support/routing';
import { Container, Grid, Card, CardContent, Box } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readMore: false
    };
  }

  render() {
    return (
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <Card>
              <CardContent>
                <Theory></Theory>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Predpostavke</Typography>
                <Typography variant="body1" paragraph>
                  <ul>
                    <li>
                      <strong>Enostavni slučajni vzorec</strong>
                      <br></br>
                      Enote so bile izbrane v vzorec s postopkom enostavnega
                      slučajnega vzorca. Vsaka enota ima enako verjetnost izbora
                      v vzorec.
                    </li>
                    <li>
                      <strong>Neodvisnost enot</strong>
                      <br></br>
                      Enote v vzorcu so neodvisne med seboj. To zagotovimo z
                      vzročenjem z zamenjavo ali pa z velikostjo vzorca manjšo
                      od 10% velikosti populacije.
                    </li>
                    <li>
                      <strong>Normalna porazdelitev</strong>
                      <br></br>Preverimo ali je porazdelitev spremenljivke na
                      populaciji približno normalna, ali pa zagotovimo dovolj
                      velik vzorec (N > 30).
                    </li>
                  </ul>
                </Typography>

                <Box mt={3}>
                  <PageControls
                    nextText="Začni izračun"
                    previous={false}
                    nextIcon={<ChevronRightIcon></ChevronRightIcon>}
                    nextClickHandler={() =>
                      changeCalculatorStep('t-test', 'subject')
                    }
                  ></PageControls>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default Intro;
