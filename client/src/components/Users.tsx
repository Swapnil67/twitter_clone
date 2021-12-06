import React from "react";

import {gql, useQuery} from "@apollo/client"

const USER_QUERY = gql`
query USERS_QUERY {
    users {
      id
      name
    }
}
`

interface User {
  name: string
}

const Users = () => {
  const {loading, error, data} = useQuery(USER_QUERY);
  if(loading) return <p>Loading...</p>
  if(error) return <p>{error.message}</p>
  console.log(error);
  
  console.log(data.users);
  
  return (
    <div>
      {data?.users.map((user: User) => {
        return <p>{user.name}</p>
      })}
    </div>
  )
};

export default Users;