import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from 'apollo-boost';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

import { isBrowser } from '../utils';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function create(initialState?: any) {
  const httpLink = createHttpLink({
    fetch: !isBrowser() ? fetch : undefined,
    uri: process.env.API_URI,
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return new ApolloClient({
    connectToDevTools: isBrowser(),
    ssrMode: !isBrowser(),
    link: authLink.concat(httpLink),
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
