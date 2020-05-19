import React from 'react';
import { Layout } from 'antd';
import SideNav from './SideNav';
import HeaderNav from './HeaderNav';
import ContentMain from './ContentMain';
import './index.less';

const { Sider, Content } = Layout;

class LayoutNav extends React.Component {
  state = {
    collapsed: false,
  };

  headerClick = value => {
    this.setState({
      collapsed: value,
    });
  };
  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <SideNav />
        </Sider>
        <Layout className="as_layout">
          <HeaderNav
            iconClick={value => {
              this.headerClick(value);
            }}
          />
          <Content className="as_layout_main">
            <ContentMain />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutNav;
