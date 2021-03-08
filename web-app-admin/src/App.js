import React from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home/Home';
import Login from './components/Login';
import Manager from './components/Manager/Manager';


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/manager' component={Manager}/>
      <Route exact path='/load-data' component={Dashboard}/>
    </div>
  );
}

export default App;
