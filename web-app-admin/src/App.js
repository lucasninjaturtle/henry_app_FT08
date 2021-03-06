import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import EditCohort from "./pages/EditCohort";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/load-data" component={Dashboard} />
      <Route exact path="/editCohort" component={EditCohort} />
    </div>
  );
}

export default App;
