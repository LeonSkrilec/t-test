import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import RalewayRegularTTF from '../assets/fonts/Raleway/Raleway-Regular.ttf';
import RalewayBoldTTF from '../assets/fonts/Raleway/Raleway-Bold.ttf';
import RalewayLightTTF from '../assets/fonts/Raleway/Raleway-Light.ttf';

const RalewayRegular = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Raleway'),
    local('Raleway-Regular'),
    url(${RalewayRegularTTF}) format('ttf')
  `
};

const RalewayBold = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
    local('Raleway'),
    local('Raleway-Regular'),
    url(${RalewayBoldTTF}) format('ttf')
  `
};

const RalewayLight = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 300,
  src: `
    local('Raleway'),
    local('Raleway-Light'),
    url(${RalewayLightTTF}) format('ttf')
  `
};

const theme = props => {
  const theme = createMuiTheme({
    overrides: {
      MuiButton: {
        contained: {
          backgroundColor: 'white',
          color: '#1F5FA8'
        }
      }
    },
    palette: {
      primary: {
        main: '#1F5FA8'
      },
      secondary: {
        main: '#FFB300'
      }
    },
    typography: {
      h1: {
        fontFamily: RalewayRegular,
        fontSize: '1.5rem',
        color: 'white',
        '@media (min-width:600px)': {
          fontSize: '2.5rem'
        }
      },
      h2: {
        fontFamily: RalewayLight,
        fontSize: '2rem',
        '@media (min-width:800px)': {
          fontSize: '3rem'
        },
        marginBottom: '0.5rem',
        lineHeight: 1.2
      },
      h3: {
        fontFamily: RalewayBold,
        fontSize: '2rem',
        '@media (min-width:800px)': {
          fontSize: '2.5rem'
        },
        marginBottom: '0.5rem'
      }
    }
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default theme;

theme.propTypes = {
  children: PropTypes.node
};
