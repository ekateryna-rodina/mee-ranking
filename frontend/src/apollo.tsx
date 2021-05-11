import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";

export const URI = "http://localhost:4000/";

const httpLink = createHttpLink({
  uri: URI,
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get("Authorization");
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
