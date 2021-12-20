/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: USERS_QUERY
// ====================================================

export interface USERS_QUERY_users {
  __typename: "User";
  id: number;
  name: string | null;
}

export interface USERS_QUERY {
  users: (USERS_QUERY_users | null)[] | null;
}
