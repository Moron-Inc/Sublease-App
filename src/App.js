import './App.css';
import React from 'react';
import styled from 'styled-components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavigationBar_loggedin } from './components/NavigationBar_loggedin';
import { HomeDash } from './pages//HomeDash';
import { WatchList } from './pages/WatchList';
import { MyFeed } from './pages/MyFeed';
import { Account } from './pages/Account';
import { Messaging } from './pages/Messaging';

import { NavigationBar } from './components/NavigationBar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ContactUs } from './pages/ContactUs';

import { SearchResults } from './pages/SearchResults';
import { ResultView } from './pages/ResultView';
import { Footer } from './components/Footer';
import { NoMatch } from './pages/NoMatch';

function App() {
  const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

  return (
    <React.Fragment>
      <div className="footerPosition">
        <Router>
          <NavigationBar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pages/About" component={About} />
            <Route path="/pages/ContactUs" component={ContactUs} />
            <Route path="/pages/SearchResults" component={SearchResults} />
            <Route path="/pages/ResultView" component={ResultView} />
            <Route component={NoMatch} />
          </Switch>
          {/* <NavigationBar_loggedin />
          <Switch>
            <Route exact path="/" component={HomeDash} />
            <Route path="/pages/WatchList" component={WatchList} />
            <Route path="/pages/MyFeed" component={MyFeed} />
            <Route path="/pages/Messaging" component={Messaging} />
            <Route path="/pages/Account" component={Account} />
            <Route path="/pages/SearchResults" component={SearchResults} />
            <Route component={NoMatch} />
          </Switch> */}
        </Router>
        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default App;
