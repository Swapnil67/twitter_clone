import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import Users from './components/Users';
import Landing from './components/Landing';
import {setContext} from 'apollo-link-context';
import SignUp from './pages/SignUp';

const httplink = new HttpLink({uri: "http://localhost:4000"});
const authLink = setContext(async(req, {headers}) => {
  const token = localStorage.getItem("token");
  return {
    ...headers,
    headers: {
      Authorization: token ? `Bearer ${token}` : null
    }
  }
});

const link = authLink.concat(httplink as any);

const client = new ApolloClient({
  link: (link as any),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/landing" element={<Landing/>} />
          <Route path="/register" element={<SignUp/>} />
          <Route path="/" element={<Users/>} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
