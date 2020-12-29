import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Myhome from './pages/home'
import About from './pages/about'


export default function Routes() {
  return (
    <Router>
      <div>
        <nav>
            <Button variant="contained" color="primary"> 
              <Link to="/">Home</Link>
            </Button>
            <Button variant="contained" color="primary">
              <Link to="/about">About</Link>
            </Button>
            <Button variant="contained" color="primary">
              <Link to="/users">Users</Link>
            </Button>
          
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Myhome name = "Faiq Ahmed" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

function Users() {
  return <h2>Users</h2>;
}