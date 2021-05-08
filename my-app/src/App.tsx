import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ABOUT_ME_PATH, HOME_PATH } from './utils/constants';
import AboutMe from './pages/AboutMe/AboutMe';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME_PATH} component={Home}>
          <Header path={ABOUT_ME_PATH} text='Home'>
            <Home />
          </Header>
        </Route>
        <Route path={ABOUT_ME_PATH} component={AboutMe}>
          <Header path={HOME_PATH} text='About me'>
            <AboutMe />
          </Header>
        </Route>
      </Switch>
    </Router>
  );
};
