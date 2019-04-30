import Head from 'next/head';
import React from 'react';
import styled from '@emotion/styled';

import { Header } from '../components/Header';
import { H1 } from '../components/Headings';
import { LinksList } from '../components/LinksList';
import { SkipToContent } from '../components/SkipToContent';
import { Wrapper as Wrp } from '../components/Wrapper';

const Container = styled.main(props => ({
  minHeight: 'calc(100vh - 3rem)',
  width: '100%',
  backgroundColor: props.theme.backgroundColor,
  transition: 'background-color 0.25s',
}));

const Wrapper = styled(Wrp)({
  display: 'flex',
  minHeight: 'inherit',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '1rem',
});

function Index() {
  return (
    <>
      <Head>
        <title>Home - GQLHN</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <SkipToContent />

      <Header />

      <Container id="main" tabIndex={-1}>
        <Wrapper>
          <H1 style={{ marginBottom: '1rem' }}>Home</H1>

          <LinksList />
        </Wrapper>
      </Container>
    </>
  );
}

export default Index;
