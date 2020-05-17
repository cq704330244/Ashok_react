import React from 'react';
import { Layout } from 'antd';
import HeaderNav from './Headers';
import FooterNav from './Footer';
import Side from './Side';
import MainContent from './MainContent/index';
import '../../style/golabl.less';
import '../../style/common.less';
const { Sider, Content } = Layout;
export default class admin extends React.Component {
  render() {
    return (
      <Layout className="container">
        <Sider className="nav-left">
          <Side />
        </Sider>
        <Layout className="main">
          <HeaderNav />
          <Content className="content">
            <MainContent />
          </Content>
          <FooterNav />
        </Layout>
      </Layout>
    );
  }
}
