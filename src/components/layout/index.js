import React from 'react';
import { Row, Col } from 'antd';
import Header from './Header';
import Footer from './Footer';
import Side from './Side';
import Index from '../../view/Index';
import '../../style/golabl.less';
import '../../style/common.less';
export default class admin extends React.Component {
  render() {
    return (
      <Row className="container">
        <Col span={4} className="nav-left">
          <Side />
        </Col>
        <Col span={19} className="main">
          <Header />
          <Row className="content">
            <Index />
          </Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}
