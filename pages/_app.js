import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Theme from '../src/ui/Theme';
import Header from '../src/ui/Header';
import Footer from '../src/ui/Footer';

export default class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      selectedIndex: 0
    };
  }

  setValue = index => {
    this.setState({ value: index });
  };

  setSelectedIndex = index => {
    this.setState({ selectedIndex: index });
  };

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={Theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Header
            value={this.state.value}
            setValue={this.setValue}
            selectedIndex={this.state.selectedIndex}
            setSelectedIndex={this.setSelectedIndex}
          />
          <Component
            {...pageProps}
            setValue={this.setValue}
            setSelectedIndex={this.setSelectedIndex}
          />
          <Footer
            setValue={this.setValue}
            setSelectedIndex={this.setSelectedIndex}
          />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
