import React from 'react';
import {
  Container,
  Grid,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button
} from '@material-ui/core';

export default class settings extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, radioName) {
    console.log(event, radioName);
  }
  handleSubmit() {
    console.log('do calculate ...');
  }
  render() {
    return (
      <Container>
        <form noValidate autoComplete="off">
          <Grid container spacing={4}>
            <Grid item sm={6}>
              <FormControl>
                <FormLabel style={{ marginBottom: '15px' }}>
                  Sta varianci enaki?
                </FormLabel>
                <RadioGroup
                  aria-label="equality-of-variances"
                  name="equal_variances"
                  onChange={e => this.handleChange(e, 'equal_variances')}
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Varianci sta enaki"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="Varianci nista enaki"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item sm={6}>
              <FormControl>
                <FormLabel style={{ marginBottom: '15px' }}>
                  V kakšnem razmerju so vzorčne enote?
                </FormLabel>
                <RadioGroup
                  aria-label="paired-samples"
                  name="paired_samples"
                  onChange={e => this.handleChange(e, 'paired_samples')}
                >
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="Neodvisna vzorca"
                  />
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Odvisna vzorca"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item sm={6}>
              <FormControl>
                <FormLabel
                  style={{
                    marginBottom: '15px'
                  }}
                >
                  Izberi signifikanco
                </FormLabel>
                <RadioGroup
                  aria-label="significance"
                  name="significance"
                  onChange={e => this.handleChange(e, 'significance')}
                >
                  <FormControlLabel
                    value="0.05"
                    control={<Radio />}
                    label="0,05"
                  />
                  <FormControlLabel
                    value="0.01"
                    control={<Radio />}
                    label="0,01"
                  />
                  <FormControlLabel
                    value="0.001"
                    control={<Radio />}
                    label="0,001"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item sm={6}>
              <FormControl>
                <FormLabel style={{ marginBottom: '15px' }}>
                  Dvo ali eno stranski test?
                </FormLabel>
                <RadioGroup
                  aria-label="two-tailed"
                  name="two_tailed"
                  onChange={e => this.handleChange(e, 'two_tailed')}
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Dvostranski"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="Enostranski"
                  />
                </RadioGroup>
              </FormControl>
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
                Izračunaj
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}
