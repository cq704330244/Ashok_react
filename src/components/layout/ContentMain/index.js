import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ContentIndex from '../../../view/ContentIndex';
import ButtonPage from '../../../view/ButtonPage';
import NotFound from '../../../view/NotFound';
export default class ContentNav extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/admin/home" component={ContentIndex} />
        <Route path="/admin/home/general/button" component={ButtonPage} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
