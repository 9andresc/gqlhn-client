import color from 'color';
import React from 'react';
import styled from '@emotion/styled';

import { H2 } from '../../components/Headings';
import { Paragraph } from '../../components/Paragraph';

const Container = styled.article(props => ({
  display: 'flex',
  marginBottom: '1rem',
  width: '100%',
  flexDirection: 'column',
  padding: '1rem',
  backgroundColor: props.theme.backgroundColor,
  borderRadius: '3px',
  boxShadow: `0 4px 10px ${color(props.theme.shadowColor).fade(0.85)}`,
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
