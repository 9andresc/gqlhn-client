import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';

import { ThemeProvider } from '../utils/theme';
import withApolloClient from '../lib/withApolloClient';

class MyApp extends App {
  render() {
    // TODO: How can I add `apolloClient` to the interface/type of `this.props`?
    const { apolloClient, Component, pageProps } = this.props as any;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
