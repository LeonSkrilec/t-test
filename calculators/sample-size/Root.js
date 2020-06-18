import React from 'react';
import { Typography, Box, Container, Card, CardContent, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import LinkButton from '../../components/LinkButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Step from './Step';
// Calculator is basically a multi-step form. You take input from user and make some calculation on submit.
// Than you display results

function RootFunctional(props) {
  return (
    <>
      <Container fixed>
        <Card>
          <CardContent>
            <Box px={2}>
              {props.step === 'intro' ? (
                <Button
                  component={LinkButton}
                  href="/kalkulatorji"
                  variant="text"
                  color="primary"
                  startIcon={<ChevronLeftIcon></ChevronLeftIcon>}
                >
                  Nazaj na seznam
                </Button>
              ) : (
                <Button
                  component={LinkButton}
                  href="/kalkulatorji/[name]/[step]"
                  as="/kalkulatorji/velikost-vzorca/intro"
                  variant="text"
                  color="primary"
                  startIcon={<ChevronLeftIcon></ChevronLeftIcon>}
                >
                  Na začetek
                </Button>
              )}
              <Typography variant="h3" align="left">
                Izračun velikosti vzorca
              </Typography>
              <Step step={props.step}></Step>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

RootFunctional.propTypes = {
  step: PropTypes.string
};

RootFunctional.defaultProps = {
  step: 'intro'
};

export default RootFunctional;
