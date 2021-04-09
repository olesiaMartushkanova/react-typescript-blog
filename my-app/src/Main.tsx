import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/about'>
          <AboutMe />
        </Route>
      </Switch>
    </Router>
  );
};

const AboutMe = () => {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
};
