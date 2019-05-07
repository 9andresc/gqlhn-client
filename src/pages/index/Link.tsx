import color from 'color';
import styled from '@emotion/styled';
import React from 'react';

import { H2 } from '../../components/Headings';
import { Paragraph } from '../../components/Paragraph';

const Container = styled.article(props => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1rem',
  padding: '1rem',
  width: '100%',
  backgroundColor: props.theme.backgroundColor,
  borderRadius: '3px',
  boxShadow: `0 4px 10px ${color(props.theme.greyDarkColor).fade(0.7)}`,

  '&:last-of-type': {
    marginBottom: '0',
  },
}));

const Header = styled.header({
  marginBottom: '0.5rem',
  width: '100%',
});

const Body = styled.section({
  width: '100%',
});

type Props = {
  description: string;
  url: string;
};

export function Link(props: Props) {
  return (
    <Container aria-label="Link's container">
      <Header aria-label="Link's header">
        <H2>{props.url}</H2>
      </Header>
      <Body aria-label="Link's body">
        <Paragraph>{props.description}</Paragraph>
      </Body>
    </Container>
  );
}
