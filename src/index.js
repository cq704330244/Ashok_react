import React from 'react';
import ReactDOM from 'react-dom';
import Index from './view/Index';
import './style/global.less';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Index />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
