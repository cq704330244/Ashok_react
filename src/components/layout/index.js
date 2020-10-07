import React from 'react';
import { Layout } from 'antd';
import SideNav from './SideNav';
import HeaderNav from './HeaderNav';
import ContentMain from './ContentMain';
import themsContentx from '../../view/Home/contenxt';

import './index.less';

const { Sider, Content } = Layout;
const { Consumer } = themsContentx;
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
        <Consumer>
          {data => {
            return (
              <React.Fragment>
                <Sider
                  trigger={null}
                  theme={data.theme === 'light' ? 'light' : 'dark'}
                  collapsible
                  collapsed={this.state.collapsed}>
                  <SideNav datas={data} />
                </Sider>
                <Layout className="as_layout">
                  <HeaderNav
                    iconClick={value => {
                      this.headerClick(value);
                    }}
                    datas={data}
                  />
                  <Content className="as_layout_main">
                    <ContentMain />
                  </Content>
                </Layout>
              </React.Fragment>
            );
          }}
        </Consumer>
      </Layout>
    );
  }
}

export default LayoutNav;
