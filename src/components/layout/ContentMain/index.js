import React from 'react';
import { Route, Switch } from 'react-router-dom';
//首页
import ContentIndex from '../../../view/ContentIndex';
// 基本组件
import SelectPage from '../../../view/Picselect';
import listPage from '../../../view/Listscroll';
// 404 页面
import NotFound from '../../../view/NotFound';
export default class ContentNav extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/admin/home" component={ContentIndex} />
        <Route path="/admin/home/general/picselect" component={SelectPage} />
        <Route path="/admin/home/general/listscroll" component={listPage} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
