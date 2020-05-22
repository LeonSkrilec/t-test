import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

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
        fontFamily: 'Raleway',
        fontWeight: 400,
        fontSize: '1.5rem',
        color: 'white',
        '@media (min-width:600px)': {
          fontSize: '2.5rem'
        }
      },
      h2: {
        fontFamily: 'Raleway',
        fontWeight: 300,
        fontSize: '2rem',
        '@media (min-width:800px)': {
          fontSize: '3rem'
        },
        marginBottom: '0.5rem',
        lineHeight: 1.2
      },
      h3: {
        fontFamily: 'Raleway',
        fontWeight: 700,
        fontSize: '1.5rem',
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
