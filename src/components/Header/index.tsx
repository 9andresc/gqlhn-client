import styled from '@emotion/styled';
import React from 'react';

import { Button } from '../Button';
import { LogoIcon, MoonIcon, SunIcon } from '../Icons';
import { Switch } from '../Switch';
import { useTheme } from '../../utils/theme';
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

const LeftContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
});

type Props = {
  showAuthDialog: () => void;
};

export function Header(props: Props) {
  const themeState = useTheme();

  return (
    <Container tabIndex={-1}>
      <Wrapper>
        <LogoIcon size={2} />

        <LeftContainer>
          <Button
            kind="primaryLight"
            style={{ marginRight: '0.5rem' }}
            onClick={props.showAuthDialog}
          >
            Sign in
          </Button>

          <Switch
            aria-label="Switch between light and dark mode"
            isOn={localStorage.getItem('isDark') === 'true'}
            onIcon={<MoonIcon />}
            offIcon={<SunIcon />}
            onChange={() => themeState.toggle()}
          />
        </LeftContainer>
      </Wrapper>
    </Container>
  );
}
