import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }
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
        <Box my={2} align="center">
          <Link
            href="/calculators/[slug]/[page]"
            as="/calculators/t-test/subject"
            passHref
          >
            <Button component="a" color="primary" variant="contained">
              Začni izračun
            </Button>
          </Link>
        </Box>
      </>
    );
  }
}
export default Intro;
