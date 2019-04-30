import React from 'react';
import styled from '@emotion/styled';

import { useTheme } from '../../utils/theme';
import { Switch } from '../Switch';
import { Wrapper as Wrp } from '../Wrapper';

const Container = styled.header(props => ({
  height: '3rem',
  width: '100%',
  backgroundColor: props.theme.primaryColor,
}));

const Wrapper = styled(Wrp)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 1rem',
});

const Logo = styled.img({
  height: '2rem',
  width: 'auto',
});

export function Header() {
  const themeState = useTheme();

  return (
    <Container tabIndex={-1}>
      <Wrapper>
        <Logo alt="GQLHN's logo" src="/static/logo.svg" />

        <Switch
          aria-label="Switch between light and dark mode"
          isOn={localStorage.getItem('isDark') === 'true'}
          offIconSrc="/static/emoji-sun.svg"
          onIconSrc="/static/emoji-moon.svg"
          onChange={() => themeState.toggle()}
        />
      </Wrapper>
    </Container>
  );
}
