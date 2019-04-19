import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

import { isBrowser } from '../utils';

// TODO: Replace apolloClient's `any` with ApolloClient interface
let apolloClient: any = null;

// TODO: Replace initialState's `any` with InitialState interface
function create(initialState?: any) {
  return new ApolloClient({
    connectToDevTools: isBrowser(),
    ssrMode: !isBrowser(),
    link: new HttpLink({
      uri: process.env.API_URI,
      fetch: !isBrowser() ? fetch : undefined,
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default function initApollo(initialState?: any) {
  if (!isBrowser()) {
    return create(initialState);
  }

  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
