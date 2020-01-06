import NextApp from 'next/app';
import React from 'react';
import ThemeProvider from '../theme/Provider';
import Master from '../layouts/Master';
import DrawerLayout from '../layouts/DrawerLayout';

export default class App extends NextApp {
  // remove it here
  componentDidMount() {
    // eslint-disable-next-line no-undef
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Master>
        <DrawerLayout>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </DrawerLayout>
      </Master>
    );
  }
}
