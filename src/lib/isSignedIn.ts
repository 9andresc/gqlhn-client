import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import gql from 'graphql-tag';

export async function isSignedIn(
  apolloClient: ApolloClient<NormalizedCacheObject>,
) {
  try {
    const { data } = await apolloClient.query({
      query: gql`
        query getUser {
          user {
            id
            name
          }
        }
      `,
    });

    return { signedInUser: data };
  } catch (_error) {
    return { signedInUser: {} };
  }
}
