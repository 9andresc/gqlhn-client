import NextApp, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import 'sanitize.css';
import 'what-input';

import { loadFonts, ThemeProvider } from '../utils/theme';
import withApolloClient from '../lib/withApolloClient';

class App extends NextApp {
  componentDidMount() {
    loadFonts();
  }

  render() {
    // TODO: How can I add `apolloClient` to the interface/type of `this.props`?
    const { apolloClient, Component, pageProps } = this.props as any;

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

export default withApolloClient(App);
