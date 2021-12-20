import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import Users from "./components/Users";
import Landing from "./components/Landing";
import { setContext } from "apollo-link-context";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import IsAuthenticated from "./components/isAuthenticated";
import './App.css';

const httplink = new HttpLink({ uri: "http://localhost:4000" });
const authLink = setContext(async (req, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    ...headers,
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const link = authLink.concat(httplink as any);
// Apollo Client
const client = new ApolloClient({
  link: link as any,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path='/' element={<IsAuthenticated/>}>
            <Route path="/" element={<Users/>} />
          </Route> */}
          <Route
            path="/Users"
            element={
              <IsAuthenticated>
                <Users />
              </IsAuthenticated>
            }
          />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
