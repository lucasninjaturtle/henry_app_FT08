import React from "react";
import { Route } from "react-router-dom";
import LoadCsv from "./pages/LoadCsv/LoadCsv";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import EditCohort from "./pages/EditCohort/EditCohort";
import Manager from "./components/Manager/Manager";
import EditUser from "./pages/EditUser";
import EditInstructor from "./pages/EditInstructor/EditInstructor";
import DeleteStudent from "./components/DeleteStudent";

import CreateStudent from "./pages/CreateStudent/CreateStudent";
import CreateInstructor from "./pages/CreateInstructor/CreateInstructor";
import CreateGroup from "./pages/CreateGroup/CreateGroup";
import CreatePM from "./pages/CreatePM/CreatePM";
import CreateCohorte from "./pages/CreateCohorte/CreateCohorte";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import EditEvent from "./pages/EditEvent/EditEvent";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/load/:type" component={LoadCsv} />
      <Route exact path="/create/student" component={CreateStudent} />
      <Route exact path="/create/instructor" component={CreateInstructor} />
      <Route exact path="/create/cohort" component={CreateCohorte} />
      <Route exact path="/create/event" component={CreateEvent} />
      <Route exact path="/create/pm" component={CreatePM} />
      <Route exact path="/create/group" component={CreateGroup} />
      <Route exact path="/edit/cohort" component={EditCohort} />
      <Route exact path="/edit/instructor" component={EditInstructor} />
      <Route exact path="/edit/student" component={EditUser} />
      <Route exact path="/delete/student" component={DeleteStudent} />
      <Route exact path="/manager" component={Manager} />
      <Route exact path="/edit/event" component={EditEvent} />
    </div>
  );
}

export default App;
