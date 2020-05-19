import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import AuthRouter from '../../components/AuthRouter';
import Login from '../Login';
import NotFound from '../NotFound';
import Home from '../Home';

class Index extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Redirect from="/login" to="/"></Redirect>
          <AuthRouter path="/admin/home" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Index;
