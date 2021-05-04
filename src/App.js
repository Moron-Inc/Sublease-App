import logo from './logo.svg';
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar_loggedin } from './components/NavigationBar_loggedin';
import { NavigationBar } from './components/NavigationBar';
import { HomeDash } from './pages//HomeDash';
import { WatchList } from './pages/WatchList';
import { MyFeed } from './pages/MyFeed';
import { Account } from './pages/Account';
import { Messaging } from './pages/Messaging';
import { Home } from './pages//Home';
import { About } from './pages/About';
import { ContactUs } from './pages/ContactUs';
import { Login } from './pages/Login';
import { NoMatch } from './pages/NoMatch';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pages/About" component={About} />
          <Route path="/pages/ContactUs" component={ContactUs} />
          <Route path="/pages/Login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
        {/* <NavigationBar_loggedin />
        <Switch>
          <Route exact path="/" component={HomeDash} />
          <Route path="/pages/WatchList" component={WatchList} />
          <Route path="/pages/MyFeed" component={MyFeed} />
          <Route path="/pages/Messaging" component={Messaging} />
          <Route path="/pages/Account" component={Account} />
          <Route component={NoMatch} />
        </Switch> */}
      </Router>
    </React.Fragment>
  );
}

export default App;
