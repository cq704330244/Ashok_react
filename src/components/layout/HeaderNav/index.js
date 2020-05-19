import React, { Component } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
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
    return (
      <div className="as_header">
        {console.log(this.props)}
        <Header className="as_header_bg" style={{ padding: 0 }}>
          {React.createElement(
            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'as_trigger',
              onClick: this.toggle,
            }
          )}
        </Header>
      </div>
    );
  }
}
