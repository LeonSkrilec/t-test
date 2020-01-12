import NextApp from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../store/withReduxStore';
import ThemeProvider from '../theme/Provider';
import Master from '../layouts/Master';
import DrawerLayout from '../layouts/DrawerLayout';

class App extends NextApp {
  // remove it here
  componentDidMount() {
    // eslint-disable-next-line no-undef
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Master>
        <ThemeProvider>
          <DrawerLayout>
            <Provider store={reduxStore}>
              <Component {...pageProps} />
            </Provider>
          </DrawerLayout>
        </ThemeProvider>
      </Master>
    );
  }
}

export default withReduxStore(App);
