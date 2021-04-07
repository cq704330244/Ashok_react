import React from 'react';
import Sign from './Sign';
import logo from '../../assets/login-logo.png';
import './style.less';

export default () => {
  return (
    <div className="mark">
      <div className="container">
        <div className="login-header">
          <div className="login-logo">
            <img src={logo} alt="" />
          </div>
          Ashok
        </div>
        <div className="login-content">
          <Sign />
        </div>
      </div>
    </div>
  );
};
