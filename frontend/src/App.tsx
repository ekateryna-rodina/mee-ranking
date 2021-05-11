import { ApolloProvider } from "@apollo/client";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { client } from "./apollo";
import CreateDeckPage from "./pages/CreateDeckPage";
import RankingPage from "./pages/RankingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/login" component={SignInPage} />
          <Route exact path="/register" component={SignUpPage} />
          <Route exact path="/create" component={CreateDeckPage} />
          <Route exact path="/rank" component={RankingPage} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
