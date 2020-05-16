import React from 'react';
import { Menu } from 'antd';
import menuList from './config.js';
import './index.less';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default class Side extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  rendericon(icon) {
    if (icon === 'icon1') {
      return <PieChartOutlined />;
    }
    if (icon === 'icon2') {
      return <DesktopOutlined />;
    }
    if (icon === 'icon3') {
      return <ContainerOutlined />;
    }
    if (icon === 'icon4') {
      return <MailOutlined />;
    }
    if (icon === 'icon5') {
      return <AppstoreOutlined />;
    }
  }
  renderMenu(data) {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            icon={this.rendericon(item.icon)}
            title={item.title}>
            {item.children.map(items => {
              if (items.children) {
                return (
                  <SubMenu key={items.key} title={items.title}>
                    {items.children.map(itemss => {
                      return (
                        <Menu.Item key={itemss.key}>{itemss.title}</Menu.Item>
                      );
                    })}
                  </SubMenu>
                );
              }
              return <Menu.Item key={items.key}>{items.title}</Menu.Item>;
            })}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key} icon={this.rendericon(item.icon)}>
          {item.title}
        </Menu.Item>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="logowrap">
          <div className="logo"></div>
          <h1>Ashok</h1>
        </div>
        <Menu
          defaultSelectedKeys={['/admin/home']}
          defaultOpenKeys={['/admin/pro']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}>
          {this.renderMenu(menuList)}
          {/*
          <SubMenu
            key="sub2"
            icon={<AppstoreOutlined />}
            title="Navigation Two"
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu> */}
        </Menu>
      </div>
    );
  }
}
