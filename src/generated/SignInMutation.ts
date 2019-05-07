/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignInMutation
// ====================================================

export interface SignInMutation_signIn_user {
  __typename: 'User';
  name: string;
}

export interface SignInMutation_signIn {
  __typename: 'AuthPayload';
  token: string | null;
  user: SignInMutation_signIn_user | null;
}

export interface SignInMutation {
  signIn: SignInMutation_signIn | null;
}

export interface SignInMutationVariables {
  email: string;
  password: string;
}
