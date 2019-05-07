import styled from '@emotion/styled';
import Head from 'next/head';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import '@reach/skip-nav/styles.css';
import React, { useState } from 'react';

import { AuthDialog } from '../../components/AuthDialog';
import { Header } from '../../components/Header';
import { H1 } from '../../components/Headings';
import { Wrapper as Wrp } from '../../components/Wrapper';

import { CreateLink } from './CreateLink';
import { LinksList } from './LinksList';

const Container = styled.main(props => ({
  minHeight: 'calc(100vh - 3rem)',
  width: '100%',
  backgroundColor: props.theme.backgroundColor,
  transition: 'background-color 0.25s',
}));

const Wrapper = styled(Wrp)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: 'inherit',
  padding: '1rem',
});

export default function Home() {
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Home - GQLHN</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <SkipNavLink />

      <Header showAuthDialog={() => setIsAuthDialogOpen(true)} />

      <SkipNavContent />

      <Container>
        <Wrapper>
          <H1 style={{ marginBottom: '1rem' }}>Home</H1>

          <LinksList />

          <CreateLink />
        </Wrapper>
      </Container>

      <AuthDialog
        isOpen={isAuthDialogOpen}
        close={() => setIsAuthDialogOpen(false)}
      />
    </>
  );
}
