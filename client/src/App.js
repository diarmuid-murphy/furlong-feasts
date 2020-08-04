import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

function App() {
  return (
    <Router>
      <Navigation />

      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='*' render={() => {
            return <h1>404</h1>;
          }} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
