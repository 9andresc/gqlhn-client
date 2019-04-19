import { AppComponentContext } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { getDataFromTree } from 'react-apollo';

import { isBrowser } from '../utils';

import initApollo from './initApollo';

export default function(App: any) {
  function Apollo(props: any) {
    const apolloClient = initApollo(props.apolloState);

    return <App {...props} apolloClient={apolloClient} />;
  }

  Apollo.displayName = 'withApollo(App)';

  Apollo.getInitialProps = async (ctx: AppComponentContext) => {
    const { Component, router } = ctx;

    let appProps: any = {};
    if (App.getInitialProps) {
      appProps = await App.getInitialProps(ctx);
    }

    const apolloClient = initApollo();
    appProps.apolloClient = apolloClient;

    if (!isBrowser()) {
      try {
        await getDataFromTree(
          <App {...appProps} Component={Component} router={router} />,
        );
      } catch (error) {
        console.error('Error while running `getDataFromTree`', error);
      }

      Head.rewind();
    }

    const apolloState = apolloClient.cache.extract();

    return {
      ...appProps,
      apolloState,
    };
  };

  return Apollo;
}
