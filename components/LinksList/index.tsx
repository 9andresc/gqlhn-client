import gql from 'graphql-tag';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import styled from '@emotion/styled';

import { FeedQuery } from '../../generated/FeedQuery';
import { Link } from '../Link';
import { Spinner } from '../Spinner';

const Container = styled.article({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
});

const feedQuery = gql`
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
  const { data, loading } = useQuery<FeedQuery>(feedQuery);

  if (loading || !data) return <Spinner />;

  const links = data.feed.links;

  return (
    <Container>
      {links.map(link => (
        <Link key={link.id} description={link.description} url={link.url} />
      ))}
    </Container>
  );
}
