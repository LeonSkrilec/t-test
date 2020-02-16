import React from 'react';
import Typography from '@material-ui/core/Typography';
import PageControls from './components/PageControls';
import { changeCalculatorStep } from '../../support/routing';
class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  nextClickHandler() {}
  render() {
    return (
      <>
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
      </>
    );
  }
}
export default Intro;
