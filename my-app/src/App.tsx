import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ABOUT_ME_PATH,
  CODE_CHALLENGE_PATH,
  HOME_PATH,
  MY_STORY_PATH,
} from './utils/constants';
import AboutMe from './pages/AboutMe/AboutMe';
import Home from './pages/Home/Home';
import ReadMyStory from './pages/ReadMyStory/ReadMyStory';
import CodeChallenge from './pages/CodeChallenge/CodeChallenge';

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
        <Route path={MY_STORY_PATH} component={ReadMyStory}>
          <ReadMyStory />
        </Route>
        <Route path={CODE_CHALLENGE_PATH} component={CodeChallenge}>
          <ReadMyStory />
        </Route>
      </Switch>
    </Router>
  );
};
