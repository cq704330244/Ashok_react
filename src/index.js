import React from 'react';
import ReactDOM from 'react-dom';
import './style/golabl.less';
import Home from './view/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Home />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
