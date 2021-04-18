import logo from './logo.svg';
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar_loggedin } from './components/NavigationBar_loggedin';
import { NavigationBar } from './components/NavigationBar';
import { HomeDash } from './HomeDash';
import { WatchList } from './WatchList';
import { MyFeed } from './MyFeed';
import { Account } from './Account';
import { Messaging } from './Messaging';
import { Home } from './Home';
import { About } from './About';
import { ContactUs } from './ContactUs';
import { Login } from './Login';
import { NoMatch } from './NoMatch';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/Login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
        {/* <NavigationBar_loggedin />
        <Switch>
          <Route exact path="/" component={HomeDash} />
          <Route path="/WatchList" component={WatchList} />
          <Route path="/MyFeed" component={MyFeed} />
          <Route path="/Messaging" component={Messaging} />
          <Route path="/Account" component={Account} />
          <Route component={NoMatch} />
        </Switch> */}
      </Router>
    </React.Fragment>
  );
}

export default App;
