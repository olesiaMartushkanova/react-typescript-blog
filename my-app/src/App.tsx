import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ABOUT_ME_PATH, HOME_PATH } from './utils/constants';
import AboutMe from './pages/AboutMe/AboutMe';
import Home from './pages/Home/Home';
import Footer from './components/footer/Footer';
import Page from './components/common/Page/Page';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME_PATH} component={Home}>
          <Page path={ABOUT_ME_PATH} text='Home'>
            <Home />
          </Page>
        </Route>
        <Route path={ABOUT_ME_PATH} component={AboutMe}>
          <Page path={HOME_PATH} text='About me'>
            <AboutMe />
          </Page>
        </Route>
      </Switch>
    </Router>
  );
};
