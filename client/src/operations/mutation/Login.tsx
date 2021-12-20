import { gql } from "@apollo/client";

export const GET_ALL_TODOS = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
       token
      }
    }
`

