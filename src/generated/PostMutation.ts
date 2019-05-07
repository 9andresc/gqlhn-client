/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PostMutation
// ====================================================

export interface PostMutation_post {
  __typename: 'Link';
  id: string;
  createdAt: string | null;
  description: string;
  url: string;
}

export interface PostMutation {
  post: PostMutation_post;
}

export interface PostMutationVariables {
  description: string;
  url: string;
}
