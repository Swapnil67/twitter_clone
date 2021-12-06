import React from 'react';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Users from './components/Users';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Users/>
    </ApolloProvider>
  );
}

export default App;
