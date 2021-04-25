import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ABOUT_ME_PATH, HOME_PATH, MEDIUM_PATH } from './constants';
import AboutMe from './pages/AboutMe/AboutMe';
import Home from './pages/Home/Home';
import PostItem from './components/PostItem/PostItem';
import MainButton from './components/MainButton/MainButton';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME_PATH} component={Home}>
          <Home />
        </Route>
        <Route path={ABOUT_ME_PATH} component={AboutMe}>
          <AboutMe />
        </Route>
      </Switch>
    </Router>
  );
};
