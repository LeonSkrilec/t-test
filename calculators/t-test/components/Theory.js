import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';

export default function Theory() {
  const [isReadingMore, setReadMore] = React.useState(false);

  return (
    <>
      <Typography variant="h5">Kaj je t-test?</Typography>
      <Typography variant="body1" paragraph>
        T-test spada v družino inferenčne statistike t.j. veja statistike, ki se
        ukvarja s <strong>sklepanjem iz vzorca na populacijo</strong>. S
        t-testom preverimo, ali so razlike med dobljenimi vzorčnimi statistikami
        statistično značilne ali pa so le posledica naključne izbire enot v
        vzorec. Primerjamo lahko{' '}
        <strong>bodisi razlike v deležih bodisi aritmetično sredino</strong> med
        dvema vzorcema ali pa med enim vzorcem in hipotetično (populacijsko)
        vrednostjo.
      </Typography>
      <Typography variant="h5">Zakaj t-test?</Typography>
      <Typography variant="body1" paragraph>
        V raziskovalnem procesu največkrat ne moremo preverjati hipotez na
        množici vseh raziskovalnih subjektov vendar v ta namen vzamemo iz
        populacije slučajen vzorec na katerem izračunamo relevantne statistike,
        ki nas zanimajo - največkrat je to vzorčno povprečje ali delež.
      </Typography>

      <Typography variant="body1" paragraph>
        Na tem mestu pa se pojavi vprašanje.{' '}
        <strong>
          Ali lahko zaključimo, da so dobljene vzorčne statistike značilne tudi
          za populacijo?
        </strong>
      </Typography>

      <Typography variant="body1" paragraph>
        To moramo preveriti z ustreznim testom, ki upošteva značilnosti
        verjetnostnega vzorčenja. Primer takega testa je Studentov t-test, ki
        nam pove,{' '}
        <strong>
          ali je razlika med vzorčno in populacijsko statistiko značilna
        </strong>{' '}
        ali pa je le posledica naključne izbire enot v vzorec.
      </Typography>

      {!isReadingMore && (
        <Box mt={3}>
          <Button variant="outlined" onClick={() => setReadMore(true)}>
            Preberi več
          </Button>
        </Box>
      )}

      {isReadingMore && (
        <>
          <Typography variant="h5">Preverjanje domnev</Typography>
          <Typography variant="body1" paragraph>
            V družboslovju po navadi preverjamo pravilnost populacijskih domnev
            z analizo vzorčnih podatkov.
          </Typography>
          <Typography variant="body1" paragraph>
            Recimo, da želimo preveriti, ali ima kovanec res 50% možnosti, da
            pade na stran grba. V ta namen bi postavili ničelno hipotezo, ki
            pravi da je verjetnost res 50% in alternativno, ki pravi, da je
            verjetnost različna od 50%:
          </Typography>
          <Typography variant="body1" paragraph>
            H0: p = 0.5<br></br>H1: p ≠ 0.5
          </Typography>
          <Typography variant="body1" paragraph>
            Nato vzamemo vzorec 100 metov kovanca (N = 100) in preverimo
            pravilnost ničelne hipoteze. Če bi dobili npr. 40 metov na stran
            glave in 60 metov na stran grba bi že lahko malo podvomili v
            pravilnost ničelne domneve.{' '}
          </Typography>
          <Typography variant="body1" paragraph>
            Če pa bi npr. dobili 52 metov na stran glave in 48 metov na stran
            grba pa zaključek, da ničelna hipoteza ne drži, ne bi bil tako
            preprost, saj je kovanec še vedno lahko pošten, vendar je ravno v
            tem vzorcu produciral tak rezultat.{' '}
          </Typography>
          <Typography variant="body1" paragraph>
            Lepota statistike je v tem, da lahko, z določeno stopnjo tveganja,
            računsko dokažemo, kdaj je vzorčni rezultat res značilen tudi na
            populaciji in kdaj je le posledica naključne izbire enot v vzorec.
          </Typography>
          <Typography variant="h5">Interpretacija</Typography>
          <Typography variant="body1" paragraph>
            T-test nam vrne statistiko T, ki pa sama po sebi še ni tako pomembna
            za interpretacijo. Načeloma pa velja:
          </Typography>
          <Typography variant="body1" paragraph>
            <ul>
              <li>Večja t-vrednost pomeni bolj značilne razlike</li>
              <li>Manjša t-vrednost pomeni manj značilne razlike</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            Uporabna za interpretacijo pa je vrednost P, ki jo dobimo tako, da
            jo razberemo iz tabele Studentove t-porazdelitve, možno pa jo je
            tudi matematično izračunati. Vrednost P nam pove, kolikšna je
            verjetnost, da pri dani ničelni hipotezi dobimo tako vzorčno
            povprečje ali delež kot smo ga dobili. Če je ta verjetnost dovolj
            majhna lahko zaključimo, da je zelo malo verjetno, da bi dobili
            takšno vzorčno statistiko, ob predpostavki, da naša ničelna hipoteza
            drži. Tako lahko podvomimo v pravilnost ničelne hipoteze in jo
            zavrnemo.
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
