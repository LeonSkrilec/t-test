import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = props => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#006ff0'
      },
      secondary: {
        main: '#ffb300'
      }
    }
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default theme;

theme.propTypes = {
  children: PropTypes.node
};
