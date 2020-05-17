import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import Index from '../../../view/Index';
import Picselect from '../../../view/Picselect';
class MainContent extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ padding: 16, position: 'relative' }}>
          <Switch>
            <Route exact path="/admin/home" component={Index} />
            <Route
              exact
              path="/admin/home/entry/picselect"
              component={Picselect}
            />
            <Redirect exact from="/" to="/admin/home" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MainContent;
