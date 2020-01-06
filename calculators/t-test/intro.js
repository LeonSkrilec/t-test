import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function intro(props) {
  return (
    <div>
      <Typography component="p" variant="subtitle1" gutterBottom>
        Studentov t-test (ang. Student’s t-test) je metoda za testiranje
        hipotez, kjer testna statistika sledi Studentovi porazdelitvi oz. t
        porazdelitvi ob predpostavki, da ničelna hipoteza (H0) drži.
      </Typography>
      <Box my={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.nextStep()}
        >
          Začni izračun
        </Button>
      </Box>
    </div>
  );
}
