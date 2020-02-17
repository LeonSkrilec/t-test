import React from 'react';
import Typography from '@material-ui/core/Typography';
import PageControls from './components/PageControls';
import { changeCalculatorStep } from '../../support/routing';
import { Container } from '@material-ui/core';
class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  nextClickHandler() {}
  render() {
    return (
      <Container maxWidth="md">
        <Typography
          component="p"
          variant="subtitle1"
          gutterBottom
          align="center"
        >
          Studentov t-test (ang. Student’s t-test) je metoda za testiranje
          hipotez, kjer testna statistika sledi Studentovi porazdelitvi oz. t
          porazdelitvi ob predpostavki, da ničelna hipoteza (H0) drži.
        </Typography>
        <PageControls
          nextText="Začni izračun"
          previous={false}
          nextClickHandler={() => changeCalculatorStep('t-test', 'subject')}
        ></PageControls>
      </Container>
    );
  }
}
export default Intro;
