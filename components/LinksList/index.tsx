import React from 'react';
import styled from '@emotion/styled';

import { Link } from '../Link';

const Container = styled.article({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
});

export function LinksList() {
  const links = [
    {
      id: '1',
      description: 'Prisma turns your database into a GraphQL API 😎',
      url: 'https://www.prismagraphql.com',
    },
    {
      id: '2',
      description: 'The best GraphQL client',
      url: 'https://www.apollographql.com/docs/react/',
    },
  ];

  return (
    <Container aria-label="Links' container">
      {links.map(link => (
        <Link key={link.id} description={link.description} url={link.url} />
      ))}
    </Container>
  );
}
