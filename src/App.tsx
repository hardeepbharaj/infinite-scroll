import React from 'react';
import { Redirect, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";

import { ProtectedRoute } from './protected.route';

import NavBar from './NavBar';
import NewsArticle from './NewsArticle';
import LoginPage from './LoginPage';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="main">
        <NavBar />
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={NewsArticle} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
