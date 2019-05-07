import React from 'react';
import styled from '@emotion/styled';

import { ErrorIcon } from '../Icons';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

type LabelProps = {
  hasError: boolean;
};

const Label = styled.label<LabelProps>(props => ({
  marginBottom: '0.2rem',
  color: props.hasError ? props.theme.dangerColor : props.theme.bodyColor,
  fontSize: '1rem',
  transition: 'color 0.25s',
}));

type InputProps = {
  hasError: boolean;
};

const Input = styled.input<InputProps>(props => ({
  marginBottom: '0.3rem',
  minHeight: '2rem',
  padding: '0 0.5rem',
  backgroundColor: props.theme.bodyColor,
  border: props.hasError ? `1px inset ${props.theme.dangerColor}` : 'none',
  borderRadius: '3px',
  color: props.theme.backgroundColor,
  fontSize: '1rem',
  transition: 'background-color 0.25s, color 0.25s',
}));

const ErrorContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0.3rem',
  width: '100%',
});

const ErrorDescription = styled.p(props => ({
  margin: '0',
  color: props.theme.dangerColor,
  fontSize: '0.75rem',
}));

type FormGroupProps = {
  errorDescription: string;
  hasError: boolean;
  id: string;
  label: string;
  style?: React.CSSProperties;
  type?: 'email' | 'number' | 'password' | 'text' | 'textarea';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function FormGroup(props: FormGroupProps) {
  return (
    <Container style={props.style}>
      <Label hasError={props.hasError} htmlFor={props.id}>
        {props.label}
      </Label>

      <Input
        aria-describedby={props.hasError ? `${props.id}Error` : ''}
        aria-invalid={props.hasError}
        hasError={props.hasError}
        id={props.id}
        type={props.type || 'text'}
        onChange={props.onChange}
      />

      {props.hasError ? (
        <ErrorContainer>
          <ErrorIcon size={0.75} style={{ marginRight: '0.25rem' }} />
          <ErrorDescription id={`${props.id}Error`} role="alert">
            {props.errorDescription}
          </ErrorDescription>
        </ErrorContainer>
      ) : null}
    </Container>
  );
}
