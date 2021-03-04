import React from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Route exact path='/login' component={Login}/>
      <Route exact path='/load-data' component={Dashboard}/>
    </div>
  );
}

export default App;
