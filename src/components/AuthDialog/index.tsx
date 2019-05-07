import Color from 'color';
import styled from '@emotion/styled';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@reach/tabs';
import React from 'react';

import { Button } from '../Button';
import { Breakpoints } from '../../utils/theme';

import { SignIn } from './SignIn';

const Overlay = styled(DialogOverlay)(props => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: Color(props.theme.greyDarkColor)
    .fade(0.25)
    .string(),
}));

const Content = styled(DialogContent)(props => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  minHeight: '100vh',
  padding: '1rem',
  width: '100vw',
  backgroundColor: props.theme.backgroundColor,
  boxShadow: `0 4px 10px ${Color(props.theme.greyDarkColor).fade(0.7)}`,

  [Breakpoints.Tablet]: {
    minHeight: 'auto',
    width: '400px',
    borderRadius: '3px',
  },
}));

const CloseButton = styled(Button)({
  position: 'absolute',
  right: '0.5rem',
  top: '0.5rem',
  height: '1.5rem',
  padding: '0',
  width: '1.5rem',
  borderRadius: '100rem',
});

const TabListContainer = styled(TabList)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});

type TabButtonProps = {
  isSelected?: number;
};

const TabButton = styled(Tab)<TabButtonProps>(props => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2rem',
  padding: '0',
  width: '5rem',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: `2px inset ${
    props.isSelected ? props.theme.primaryColor : props.theme.backgroundColor
  }`,
  WebkitAppearance: 'none',
  color: props.theme.bodyColor,
}));

type Props = {
  isOpen: boolean;
  close: () => void;
};

export function AuthDialog(props: Props) {
  return (
    <Overlay isOpen={props.isOpen}>
      <Content>
        <CloseButton aria-label="Close" onClick={props.close}>
          <span aria-hidden>x</span>
        </CloseButton>

        <Tabs defaultIndex={0}>
          <TabListContainer>
            <TabButton>Sign in</TabButton>
            <TabButton>Sign up</TabButton>
          </TabListContainer>

          <TabPanels>
            <TabPanel>
              <SignIn />
            </TabPanel>
            <TabPanel>Sign up</TabPanel>
          </TabPanels>
        </Tabs>
      </Content>
    </Overlay>
  );
}
