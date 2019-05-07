import styled from '@emotion/styled';
import gql from 'graphql-tag';
import React from 'react';
import { useMutation } from 'react-apollo-hooks';

import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Note } from '../Note';
import {
  SignInMutation,
  SignInMutationVariables,
} from '../../generated/SignInMutation';

const Container = styled.form({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
});

export function SignIn() {
  const [state, setState] = React.useState({ email: '', password: '' });

  const SIGN_IN_MUTATION = gql`
    mutation SignInMutation($email: String!, $password: String!) {
      signIn(email: $email, password: $password) {
        token
        user {
          name
        }
      }
    }
  `;
  const [signIn, result] = useMutation<SignInMutation, SignInMutationVariables>(
    SIGN_IN_MUTATION,
    {
      variables: { email: state.email, password: state.password },
    },
  );

  function isGenericError(): boolean {
    if (result.error) {
      return result.error.graphQLErrors[0].message === 'Not authenticated';
    }
    return false;
  }

  function getErrorDescription(): string {
    const descriptions: any = {
      'Not authenticated': 'Please, authenticate yourself first',
      'description: Is required': 'Please, enter a description',
      'url: Is required': 'Please, enter a URL',
    };

    return result.error
      ? descriptions[result.error.graphQLErrors[0].message]
      : '';
  }

  function hasError(id: 'email' | 'password'): boolean {
    if (result.error) {
      switch (id) {
        case 'email':
          return result.error.graphQLErrors[0].message === 'email: Is required';

        case 'password':
          return (
            result.error.graphQLErrors[0].message === 'password: Is required'
          );

        default:
          return false;
      }
    }

    return false;
  }

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setState({ ...state, [event.target.id]: event.target.value });
  }

  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    signIn();
  }

  return (
    <Container onSubmit={handleOnSubmit}>
      {isGenericError() ? (
        <Note
          kind="error"
          label={getErrorDescription()}
          style={{ marginBottom: '0.5rem' }}
        />
      ) : null}

      <FormGroup
        errorDescription={getErrorDescription()}
        hasError={hasError('email')}
        id="email"
        label="Email"
        style={{ marginBottom: '0.5rem' }}
        type="email"
        onChange={handleOnChange}
      />

      <FormGroup
        errorDescription={getErrorDescription()}
        hasError={hasError('password')}
        id="password"
        label="Password"
        style={{ marginBottom: '0.5rem' }}
        onChange={handleOnChange}
      />

      <Button disabled={result.loading} kind="primary" type="submit">
        {result.loading ? 'Sending...' : 'Sign in'}
      </Button>
    </Container>
  );
}
