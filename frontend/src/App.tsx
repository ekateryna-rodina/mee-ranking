import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateDeckPage from "./pages/CreateDeckPage";
import RankingPage from "./pages/RankingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CreateDeckPage} />
        <Route exact path="/rank" component={RankingPage} />
      </Switch>
    </Router>
  );
}

export default App;
