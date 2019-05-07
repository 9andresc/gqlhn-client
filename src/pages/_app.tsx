import NextApp, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo-hooks';
import 'sanitize.css';
import 'what-input';

import { loadFonts, ThemeProvider } from '../utils/theme';
import { withApollo } from '../lib/withApollo';

class App extends NextApp<any> {
  componentDidMount() {
    loadFonts();
  }

  render() {
    const { apolloClient, Component, pageProps } = this.props;

    return (
      <Container>
        <style jsx global>{`
          html,
          body {
            font-family: 'Rubik', sans-serif;
            font-size: 14px;
          }

          [data-whatintent='mouse'] *:focus {
            outline: none;
          }
        `}</style>

        <ApolloProvider client={apolloClient}>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(App);
