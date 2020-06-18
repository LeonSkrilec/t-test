import React from 'react';
import { Typography, Box, Button, Grid } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import EQ1 from './equations/1.svg';
import EQ2 from './equations/2.svg';
import EQ3 from './equations/3.svg';
import { changeCalculatorStep } from '../../support/routing';

export default function Theory() {
  const [isReadingMore, setReadMore] = React.useState(false);

  return (
    <>
      <Box mt={3}>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="outlined" onClick={() => setReadMore(!isReadingMore)}>
              Preberi {isReadingMore ? 'manj' : 'več'}
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ChevronRightIcon></ChevronRightIcon>}
              onClick={() => changeCalculatorStep('velikost-vzorca', 'calculation')}
            >
              Začni izračun
            </Button>
          </Grid>
        </Grid>
      </Box>

      {isReadingMore && (
        <>
          <Box mt={2}></Box>
          <Typography variant="h5">Velikost vzorca in standardna napaka</Typography>
          <Typography variant="body2" paragraph>
            (povzeto po knjigi: Vzorčenje v anketah. Kalton Graham, Vehovar Vasja. Ljubljana, 2001)
          </Typography>

          <Typography variant="body1" paragraph>
            Za ponazoritev temeljnih načel pri določanju velikosti vzorca si oglejmo primer raziskave z osebnim
            anketiranjem, kjer želimo v manjšem mestu oceniti zanimanje za obiskovanje knjižnice med odraslimi
            prebivalci. Mesto šteje 15,000 odraslih prebivalcev. Da bi določili velikost vzorca, moramo najprej
            opredeliti, kakšno natančnost potrebujemo. Opredelitev natančnosti ni lahka naloga in hitro se lahko zgodi,
            da jo precenimo, kar ima lahko neugodne finančne posledice. Vzemimo najprej cenilko, ki bo vključevala
            populacijsko vrednost v intervalu, širokem v vsako smer po 0.02 oziroma 2%, kar pomeni dve odstotni točki.
            Pri tem naj tveganje, da navedeni interval kljub vsemu ne vključuje populacijske vrednosti, znaša 5%. Z
            drugimi besedami, 95-odstotni interval zaupanja naj obsega odstopanja od vzorčne ocene v vsako smer za dve
            odstotni točki. Interval zaupanja ima torej v vsako smer širino:
          </Typography>
          <Typography variant="body1" paragraph>
            1.96 x SE(p) = 0.02 = 2%,
          </Typography>
          <Typography variant="body1" paragraph>
            zato imamo:
          </Typography>
          <Typography variant="body1" paragraph>
            P = p ± 0.02,
          </Typography>
          <Typography variant="body1" paragraph>
            pri čemer je p cenilka za populacijski delež P. Pri enostavnem slučajnem vzorcu (SRS) - in ob neupoštevanju
            faktorja FPC izhajamo iz izraza:
          </Typography>
          <Typography variant="body1" paragraph>
            <img src={EQ1} alt="" />
          </Typography>
          <Typography variant="body1" paragraph>
            kjer Q = ( 1- P), n&lsquo; pa začetna ocena potrebne velikosti vzorca. Iz zgornjega izraza sledi:
          </Typography>
          <Typography variant="body1" paragraph>
            <img src={EQ2} alt="" />
          </Typography>
          <Typography variant="body1" paragraph>
            kjer namesto izraza SE(p) v našem primeru lahko uporabimo:
          </Typography>
          <Typography variant="body1" paragraph>
            <img src={EQ3} alt="" />
          </Typography>
          <Typography variant="body1" paragraph>
            Da bi določili n&lsquo;, potrebujemo tudi oceno za vrednost P. Točna vrednost za P je seveda neznana, saj je
            to ravno količina, ki jo ocenjujemo. Kljub temu lahko iz izkušenj, poznavanja problema in rezultatov iz
            prejšnjih anket v grobem ocenimo dopustne vrednosti za populacijski delež P. Če pa vrednosti P ne moremo
            oceniti, je treba upoštevati, da je izraz PQ naj večji ravno pri P = Q = 50%. Konservativna, to je varna, je
            torej odločitev, da Izberemo tako, da bo čim bližje P = 50%. To vrednost upošteva tudi kalkulator.
          </Typography>

          <Box mt={3}>
            <Button variant="outlined" onClick={() => setReadMore(false)}>
              Preberi manj
            </Button>
          </Box>
        </>
      )}
    </>
  );
}
