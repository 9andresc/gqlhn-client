import gql from 'graphql-tag';
import React from 'react';
import { useMutation } from 'react-apollo-hooks';
import styled from '@emotion/styled';

import { Button } from '../../components/Button';
import { FormGroup } from '../../components/FormGroup';
import { H2 } from '../../components/Headings';
import { Note } from '../../components/Note';
import { Breakpoints } from '../../utils/theme';

const Container = styled.form({
  width: '100%',

  [Breakpoints.Tablet]: {
    width: '300px',
  },
});

const Fieldset = styled.fieldset({
  margin: '0',
  padding: '0',
  border: 'none',
});

const Legend = styled.legend({
  marginBottom: '0.5rem',
  padding: '0',
});

export function CreateLink() {
  const [state, setState] = React.useState({ description: '', url: '' });

  const POST_MUTATION = gql`
    mutation PostMutation($description: String!, $url: String!) {
      post(description: $description, url: $url) {
        id
        createdAt
        description
        url
      }
    }
  `;
  const [postMutation, result] = useMutation(POST_MUTATION, {
    variables: { description: state.description, url: state.url },
  });

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

  function hasError(id: 'description' | 'url'): boolean {
    if (result.error) {
      switch (id) {
        case 'description':
          return (
            result.error.graphQLErrors[0].message === 'description: Is required'
          );

        case 'url':
          return result.error.graphQLErrors[0].message === 'url: Is required';

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
    postMutation();
  }

  return (
    <Container onSubmit={handleOnSubmit}>
      <Fieldset>
        <Legend>
          <H2>Create a link</H2>
        </Legend>

        {isGenericError() ? (
          <Note
            kind="error"
            label={getErrorDescription()}
            style={{ marginBottom: '0.5rem' }}
          />
        ) : null}

        <FormGroup
          errorDescription={getErrorDescription()}
          hasError={hasError('description')}
          id="description"
          label="Description"
          style={{ marginBottom: '0.5rem' }}
          onChange={handleOnChange}
        />

        <FormGroup
          errorDescription={getErrorDescription()}
          hasError={hasError('url')}
          id="url"
          label="URL"
          style={{ marginBottom: '0.5rem' }}
          onChange={handleOnChange}
        />

        <Button disabled={result.loading} kind="primary" type="submit">
          {result.loading ? 'Sending...' : 'Submit'}
        </Button>
      </Fieldset>
    </Container>
  );
}
