import React from "react";
import { Navigate } from "react-router-dom";

import { gql, useQuery } from "@apollo/client";

const IS_LOGGED_IN = gql`
  {
    me {
      id
    }
  }
`;

interface isAuthenticatedProps {
  children: React.ReactNode;
}

const IsAuthenticated = ({ children }: isAuthenticatedProps) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  if (loading) return <p>Loading...</p>;
  console.log("error: ", data);
  if (error) return <p>Err Msg: {error.message}</p>;

  if (!data.me) {
    console.log("Is this working");
    
    return <Navigate to="/login" />;
  }
  console.log(data.me);

  return <>{children}</>;
};

export default IsAuthenticated;
