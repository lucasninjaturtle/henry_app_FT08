import React from "react";
import { Route } from "react-router-dom";
import LoadCsv from "./components/LoadCsv";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import EditCohort from "./pages/EditCohort";
import Manager from "./components/Manager/Manager";
import EditUser from "./pages/EditUser";
import Event from "./components/Event/Event";
import EditEvent from "./components/EditEvent/EditEvent";
import DeleteEvent from "./components/DeleteEvent/DeleteEvent"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/load-data/:type" component={LoadCsv} />
      <Route exact path="/editCohort" component={EditCohort} />
      <Route exact path='/edit/student' component={EditUser}/>
      <Route exact path="/manager" component={Manager} />
      <Route exact path="/create/event" component={Event} />
      <Route exact path="/edit/event" component={EditEvent} />
      <Route exact path="/delete/event" component={DeleteEvent} />
    </div>
  );
}

export default App;
