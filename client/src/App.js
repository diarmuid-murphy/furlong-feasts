import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

function App() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  // console.log(JSON.parse(user));

  return (
    <Router>
      <Navigation />

      <Container>
        <Switch>
          <Route exact path='/' render={() => <Home user={user} />} />
          <Route exact path='/about' render={() => <About user={user} />} />
          <Route exact path='*' render={() => <h1>404</h1>} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
