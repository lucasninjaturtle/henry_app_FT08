import React from "react";
import { Route } from "react-router-dom";
import LoadCsv from "./components/LoadCsv";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import EditCohort from "./pages/EditCohort/EditCohort";
import Manager from "./components/Manager/Manager";
import EditUser from "./pages/EditUser";
import EditInstructor from "./pages/EditInstructor/EditInstructor";
import DeleteStudent from "./components/DeleteStudent";
import CreateStudent from "./pages/CreateStudent/CreateStudent";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/create/student" component={CreateStudent} />
      <Route exact path="/upload/:type" component={LoadCsv} />
      <Route exact path="/edit/cohort" component={EditCohort} />
      <Route exact path="/edit/instructor" component={EditInstructor} />
      <Route exact path="/edit/student" component={EditUser} />
      <Route exact path="/delete/student" component={DeleteStudent} />
      <Route exact path="/manager" component={Manager} />
    </div>
  );
}

export default App;
