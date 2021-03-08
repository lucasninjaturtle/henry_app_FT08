import React from "react";
import { Route } from "react-router-dom";
import LoadCsv from "./components/LoadCsv";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import EditCohort from "./pages/EditCohort";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/load-data" component={LoadCsv} />
      <Route exact path="/editCohort" component={EditCohort} />
    </div>
  );
}

export default App;
