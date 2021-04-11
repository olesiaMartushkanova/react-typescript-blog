import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ABOUT_ME_PATH, HOME_PATH } from './constants';
import AboutMe from './pages/AboutMe/AboutMe';
import Home from './pages/Home/Home';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME_PATH}>
          <Home />
        </Route>
        <Route path={ABOUT_ME_PATH}>
          <AboutMe />
        </Route>
      </Switch>
    </Router>
  );
};
