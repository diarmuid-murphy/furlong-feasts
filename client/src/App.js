import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        {/* <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='*' component={Home} /> */}
      </Switch>
    </Router>
  );
}

export default App;
