import React from 'react';
import styled from '@emotion/styled';

import { Paragraph } from '../Paragraph';

type ContainerProps = {
  borderColor: string;
};

const Container = styled.div<ContainerProps>(props => ({
  padding: '0.5rem',
  width: '100%',
  backgroundColor: props.theme.backgroundColor,
  border: `1px solid ${props.theme[props.borderColor]}`,
  borderRadius: '3px',
  transition: 'background-color 0.25s',
}));

type TitleProps = {
  color: string;
};

const Title = styled(Paragraph)<TitleProps>(props => ({
  display: 'inline',
  marginRight: '0.25rem',
  width: 'auto',
  color: props.theme[props.color],
  fontSize: '0.75rem',
}));

const Label = styled(Paragraph)({
  display: 'inline',
  width: 'auto',
  fontSize: '0.75rem',
});

type NoteProps = {
  kind?: 'default' | 'error' | 'hint' | 'warning';
  label: string;
  style?: React.CSSProperties;
};

export function Note(props: NoteProps) {
  let borderColor: string;
  let title: string;
  let titleColor: string;

  switch (props.kind) {
    case 'error':
      borderColor = 'dangerColor';
      title = 'ERROR:';
      titleColor = 'dangerColor';
      break;

    case 'hint':
      borderColor = 'primaryColor';
      title = 'HINT:';
      titleColor = 'primaryColor';
      break;

    case 'warning':
      borderColor = 'primaryColor';
      title = 'WARNING:';
      titleColor = 'primaryColor';
      break;

    default:
      borderColor = 'bodyColor';
      title = '';
      titleColor = '';
      break;
  }

  return (
    <Container borderColor={borderColor} style={props.style}>
      {title ? <Title color={titleColor}>{title}</Title> : null}
      <Label>{props.label}</Label>
    </Container>
  );
}
