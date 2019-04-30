/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FeedQuery
// ====================================================

export interface FeedQuery_feed_links {
  __typename: 'Link';
  id: string;
  createdAt: string | null;
  description: string;
  url: string;
}

export interface FeedQuery_feed {
  __typename: 'Feed';
  links: FeedQuery_feed_links[];
}

export interface FeedQuery {
  feed: FeedQuery_feed;
}
