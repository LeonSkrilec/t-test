import React from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { changeCalculatorStep } from '../../support/routing';

export default function Theory() {
  return (
    <>
      <Box mt={3}>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ChevronRightIcon></ChevronRightIcon>}
              onClick={() => changeCalculatorStep('odkrivanje-razlik', 'calculation')}
            >
              Začni izračun
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
