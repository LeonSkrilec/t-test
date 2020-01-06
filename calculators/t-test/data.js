import React from 'react';
import {
  Container,
  Grid,
  FormLabel,
  TextField,
  Button
} from '@material-ui/core';

export default class Data extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    console.log('check data and go next');
    this.props.nextStep();
  }
  render() {
    return (
      <Container maxWidth="sm">
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <FormLabel component="p" style={{ marginBottom: '15px' }}>
                Opisne statistike prvega vzorca
              </FormLabel>
              <TextField
                id="units1"
                label="Št. enot"
                variant="outlined"
                helperText="Število enot v vzorcu"
                type="number"
                margin="normal"
              />
              <TextField
                id="mean1"
                label="Aritmetična sredina"
                variant="outlined"
                type="number"
                margin="normal"
              />
              <TextField
                id="variance1"
                label="Elementarna varianca"
                variant="outlined"
                type="number"
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <FormLabel component="p" style={{ marginBottom: '15px' }}>
                Opisne statistike drugega vzorca
              </FormLabel>
              <TextField
                id="units2"
                label="Št. enot"
                variant="outlined"
                helperText="Število enot v vzorcu"
                type="number"
                margin="normal"
              />
              <TextField
                id="mean2"
                label="Aritmetična sredina"
                variant="outlined"
                type="number"
                margin="normal"
              />
              <TextField
                id="variance2"
                label="Elementarna varianca"
                variant="outlined"
                type="number"
                margin="normal"
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justify="center"
            style={{ marginTop: '20px' }}
          >
            <Grid item xs={2}>
              <Button onClick={this.props.prevStep}>Nazaj</Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                onClick={this.handleSubmit}
                variant="contained"
                color="primary"
              >
                Naprej
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}
