import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ABOUT_ME_PATH, HOME_PATH } from './utils/constants';
import AboutMe from './pages/AboutMe/AboutMe';
import Home from './pages/Home/Home';
import Footer from './components/footer/Footer';

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
      <Footer />
    </Router>
  );
};
