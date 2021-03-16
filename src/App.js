import logo from './logo.svg';
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { WatchList } from './WatchList';
import { MyFeed } from './MyFeed';
import { Cart } from './Cart';
import { Signup_Login } from './Signup_Login';
import { Home } from './Home';
import { NoMatch } from './NoMatch';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/WatchList" component={WatchList} />
          <Route path="/MyFeed" component={MyFeed} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Signup_Login" component={Signup_Login} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
