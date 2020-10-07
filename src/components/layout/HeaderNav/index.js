import React, { Component } from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HeartOutlined,
  HeartFilled,
} from '@ant-design/icons';
import './index.less';
const { Header } = Layout;

export default class HeaderNav extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    const { iconClick } = this.props;
    this.setState({
      collapsed: !this.state.collapsed,
    });
    iconClick(!this.state.collapsed);
  };
  render() {
    const {
      datas: { toggleTheme, theme },
    } = this.props;
    return (
      <div className="as_header">
        <Header className="as_header_bg" style={{ padding: 0 }}>
          {React.createElement(
            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'as_trigger',
              onClick: this.toggle,
            }
          )}
          {theme === 'light' && (
            <HeartOutlined
              onClick={toggleTheme}
              style={{
                color: '#f00',
              }}
            />
          )}
          {theme === 'dark' && (
            <HeartFilled
              onClick={toggleTheme}
              style={{
                color: '#f00',
              }}
            />
          )}
        </Header>
      </div>
    );
  }
}
