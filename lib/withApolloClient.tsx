import { AppComponentContext } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { getMarkupFromTree } from 'react-apollo-hooks';

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

    if (!isBrowser()) {
      try {
        await getMarkupFromTree({
          renderFunction: renderToString,
          tree: (
            <App
              {...appProps}
              apolloClient={apolloClient}
              Component={Component}
              router={router}
            />
          ),
        });
      } catch (error) {
        console.error('Error while running `getMarkupFromTree`', error);
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
