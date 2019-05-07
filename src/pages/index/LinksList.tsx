import styled from '@emotion/styled';
import gql from 'graphql-tag';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';

import { FeedQuery } from '../../generated/FeedQuery';
import { Link } from './Link';
import { Spinner } from '../../components/Spinner';

const Container = styled.section({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  marginBottom: '2rem',
  width: '100%',
});

const FEED_QUERY = gql`
  query FeedQuery {
    feed {
      links {
        id
        createdAt
        description
        url
      }
    }
  }
`;

export function LinksList() {
  const { data, loading } = useQuery<FeedQuery>(FEED_QUERY);

  if (loading || !data)
    return (
      <Container>
        <Spinner />
      </Container>
    );

  const links = data.feed.links;

  return (
    <Container>
      {links.map(link => (
        <Link key={link.id} description={link.description} url={link.url} />
      ))}
    </Container>
  );
}
